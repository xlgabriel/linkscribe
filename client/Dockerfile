# Usar la imagen oficial de Node.js 16
FROM node:16

# Establecer el directorio de trabajo en la carpeta de la aplicación React
WORKDIR /app

# Copiar el archivo package.json a la imagen
COPY package.json .

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación a la imagen
COPY . .

# Compilar la aplicación (si es necesario, ajusta este comando según tus necesidades)
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación React
EXPOSE 3000

# Comando para iniciar la aplicación (ajusta esto según el comando que utilizas para iniciar tu aplicación React)
CMD ["npm", "start"]