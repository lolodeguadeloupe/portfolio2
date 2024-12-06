@echo off
echo Vérification des prérequis Docker...

REM Vérifier si Docker est installé
docker --version
if %errorlevel% neq 0 (
    echo Erreur : Docker n'est pas installé ou n'est pas dans le PATH
    pause
    exit /b 1
)

REM Vérifier si Docker est en cours d'exécution
docker info >nul 2>&1
if %errorlevel% neq 0 (
    echo Erreur : Docker n'est pas démarré. Veuillez démarrer Docker Desktop.
    pause
    exit /b 1
)

echo Nettoyage des conteneurs et volumes existants...
docker-compose down -v

echo Démarrage des services...
docker-compose up -d

echo Attente du démarrage des services (30 secondes)...
timeout /t 30 /nobreak > nul

echo Vérification des conteneurs...
docker ps

echo Vérification des logs du conteneur PostgreSQL...
docker logs supabase-db

echo Vérification des logs de PgAdmin...
docker logs pgadmin

echo Informations de connexion :
echo - PgAdmin : http://localhost:5050
echo - Email : admin@example.com
echo - Mot de passe : admin
echo - Hôte de la base de données : host.docker.internal ou 172.17.0.1

pause
