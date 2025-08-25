# Brand Registration Project

Este proyecto incluye un backend en FastAPI, un frontend en Next.js y una base de datos PostgreSQL. Toda la aplicación puede ejecutarse usando Docker Compose.

---

## Requisitos

- Docker
- Docker Compose

---

## Configuración de variables de entorno

En el proyecto hay archivos de ejemplo `.env.example` para cada servicio:

- Backend: `apps/api/.env.example`
- Frontend: `apps/client/.env.example`

Copia estos archivos y crea tus propios `.env`:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/client/.env.example apps/client/.env
````

Luego, edita las variables según tu configuración.

---

## Ejecutar el proyecto con Docker Compose

Desde la raíz del proyecto, ejecuta:

```bash
docker-compose up --build
```

Esto hará lo siguiente:

1. Construirá las imágenes de backend y frontend.
2. Levantará un contenedor de PostgreSQL.
3. Ejecutará las migraciones de la base de datos (si está configurado en el `Dockerfile` o `docker-compose.yml`).
4. Levantará el backend en `http://localhost:5000`.
5. Levantará el frontend en `http://localhost:3000`.

---

## Detener el proyecto

Para detener los contenedores:

```bash
docker-compose down
```

Si quieres borrar los volúmenes de la base de datos:

```bash
docker-compose down -v
```

## Modo Desarrollo (Opcional)

Si prefieres correr el proyecto en modo desarrollo sin usar Docker Compose, puedes hacerlo utilizando una base de datos PostgreSQL local y `turborepo`:

1. Asegúrate de tener PostgreSQL instalado y ejecutándose en tu máquina.
2. Crea una base de datos para el proyecto y configura tu `.env` local con los datos de conexión.
3. Instala las dependencias del proyecto con:

```bash
npm install
````

4. Levanta los servicios en modo desarrollo usando `turborepo`:

```bash
npx turbo dev
```

Esto ejecutará simultáneamente el backend y el frontend en modo desarrollo, y podrás hacer cambios en tiempo real.

## Notas

* Asegúrate de que los archivos `.env` estén presentes y correctamente configurados antes de levantar los contenedores.
* Todas las rutas relativas y puertos están configuradas según la estructura del proyecto.
