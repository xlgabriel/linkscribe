import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import classification_report, log_loss

import requests
from bs4 import BeautifulSoup

import mlflow
import mlflow.sklearn

# Inicializa una ejecución de MLflow
with mlflow.start_run():
    try:
        # Cargar el conjunto de datos desde el archivo CSV
        data = pd.read_csv("datasetm.csv")  # Reemplaza 'tu_dataset.csv' con la ubicación de tu archivo CSV

        # Obtener las etiquetas (categorías) de las columnas
        etiquetas = data.columns.tolist()

        # Crear listas para almacenar los textos y las etiquetas correspondientes
        textos = []
        etiquetas_individuales = []

        # Iterar a través de las filas del DataFrame y asignar las etiquetas a cada texto
        for index, row in data.iterrows():
            for etiqueta in etiquetas:
                texto = row[etiqueta]
                textos.append(texto)
                etiquetas_individuales.append(etiqueta)

        stop_words_espanol = [
            "de",
            "la",
            "el",
            "en",
            "y",
            "a",
            "que",
            "es",
            "un",
            "una",
            "con",
            "por",
            "para",
            "lo",
            "como",
            "más",
            "su",
            "al",
        ]
        # Preprocesar el texto con TF-IDF
        vectorizer = TfidfVectorizer(stop_words=stop_words_espanol, max_features=1000)
        X_tfidf = vectorizer.fit_transform(textos)

        # Crear un clasificador Naive Bayes
        clf = MultinomialNB()
        clf.fit(X_tfidf, etiquetas_individuales)

        # ------------------------------------------
        # Texto de prueba (usaremos una lista de textos)

        # URL de la página web que deseas analizar
        url = "https://www.muyinteresante.es/actualidad/61608.html"

        # Realiza una solicitud GET para obtener el contenido HTML de la página
        response = requests.get(url)

        # Verifica si la solicitud fue exitosa
        if response.status_code == 200:
            # Parsea el contenido HTML utilizando BeautifulSoup
            soup = BeautifulSoup(response.text, "html.parser")

            # Encuentra todos los elementos <p> y <h1> en el HTML
            text_elements = soup.find_all(["p", "h1"])

            # Extrae el texto de los elementos <p> y <h1>
            textos_prueba = [element.get_text() for element in text_elements]

            # Preprocesar los textos de prueba con TF-IDF
            X_tfidf_prueba = vectorizer.transform(textos_prueba)

            # Realizar predicciones de probabilidad en los textos de prueba
            y_pred_prob = clf.predict_proba(X_tfidf_prueba)

            # Obtener el nombre de las clases predichas con mayor probabilidad
            clases_predichas = clf.classes_[np.argmax(y_pred_prob, axis=1)]

            # Obtener los porcentajes de probabilidad máximos
            porcentajes_prediccion = np.max(y_pred_prob, axis=1) * 100

            clases_predichas_array = []
            # Imprimir solo la clase con el mayor porcentaje de probabilidad
            for i, texto in enumerate(textos_prueba):
                clase_predicha = clases_predichas[i]
                porcentaje_prediccion = porcentajes_prediccion[i]
                clases_predichas_array.append(clase_predicha)

            conteo_repeticiones = {}

            # Recorrer el array y contar las repeticiones
            for palabra in clases_predichas_array:
                if palabra in conteo_repeticiones:
                    conteo_repeticiones[palabra] += 1
                else:
                    conteo_repeticiones[palabra] = 1

            # Encontrar la palabra con el conteo más alto
            palabra_con_maximo_conteo = max(conteo_repeticiones, key=conteo_repeticiones.get)
            conteo_maximo = conteo_repeticiones[palabra_con_maximo_conteo]

            print(f"La palabra con mayor frecuencia es {palabra_con_maximo_conteo} con un {conteo_maximo} repeticiones")

        else:
            print(f"Error al acceder a la página. Código de estado: {response.status_code}")

        # Registra las métricas y parámetros después de realizar las predicciones
        mlflow.log_params(
            {
                "vectorizer_stop_words": stop_words_espanol,
                "vectorizer_max_features": 1000,
                "classifier": "MultinomialNB",
            }
        )
        mlflow.log_metrics(
            {
                "max_word_count": conteo_maximo
                
            }
        )
        mlflow.set_tag("category_prediction", palabra_con_maximo_conteo) 
        mlflow.set_tag("url", url) 
        mlflow.log_artifact("dataset.csv")  # Reemplaza 'dataset.csv' con el nombre de tu archivo

    except Exception as e:
        print(f"Error: {str(e)}")

    finally:
        mlflow.end_run()
