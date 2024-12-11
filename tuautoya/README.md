## Configuración
1. Clona el repositorio: `git clone https://github.com/usuario/proyecto.git`
2. Crea un archivo `.env` basado en `.env.example`.
3. Levanta los servicios: `docker-compose up`.
4. La aplicación estará disponible en `http://localhost:3000`.

## Agregando nuevas dependencias
git add package.json package-lock.json
git commit -m "Instalar nueva dependencia: <nombre_paquete>"
git push origin <rama>

## Reconstruye la imagen de Docker
docker compose build

## Levanta los servicios nuevamente
docker compose up
