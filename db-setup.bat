@echo off
echo Démarrage des services Docker...
docker-compose up -d

echo Attente du démarrage de la base de données...
timeout /t 10 /nobreak > nul

echo Test de connexion à la base de données...
node test-db-connection.js

echo Accédez à PgAdmin sur http://localhost:5050
echo Identifiants PgAdmin : admin@example.com / admin
pause
