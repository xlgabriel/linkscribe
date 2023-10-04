FROM node:16.13.1

# Instalamos Vite de forma global
RUN npm install

# Creamos el directorio de trabajo y copiamos los archivos de la aplicación
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .

# Ejecutamos el servidor de desarrollo de npm
CMD ["npm", "start"]