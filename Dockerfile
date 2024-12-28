# Utiliser une image de base node
FROM node:20

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]