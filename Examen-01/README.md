# Examen 01 – Documentación de APIs REST con Swagger

Estudiante: Axel Manotoa  
Asignatura: Desarrollo Web / Ingeniería de Sistemas  
Evaluación: Examen 01  
Tema: Documentación de APIs REST usando Swagger (OpenAPI 3.0)

---

## Introducción

En este examen se realizó la documentación de una API REST utilizando Swagger, aplicando el estándar OpenAPI Specification 3.0. El trabajo se basa en los endpoints previamente desarrollados y probados en clase mediante la herramienta Bruno durante las clases 008 y 009.

La API utilizada es JSONPlaceholder, un servicio REST público empleado con fines educativos que permite simular operaciones CRUD sobre distintos recursos.

---

## Objetivos

- Documentar correctamente una API REST usando OpenAPI 3.0.
- Describir endpoints, métodos HTTP, parámetros, cuerpos de petición y respuestas.
- Facilitar el entendimiento y consumo de la API mediante documentación clara e interactiva.
- Aplicar los conceptos vistos en clase sobre documentación de APIs.

---

## Herramientas utilizadas

- Swagger / OpenAPI 3.0
- Swagger Editor (https://editor.swagger.io/)
- JSONPlaceholder API (https://jsonplaceholder.typicode.com)
- Bruno
- Visual Studio Code
- Git y GitHub

---

## Endpoints documentados

Se documentaron los siguientes recursos y métodos HTTP:

Posts:
- GET /posts
- GET /posts/{id}
- POST /posts
- PUT /posts/{id}
- PATCH /posts/{id}
- DELETE /posts/{id}

Comments:
- GET /comments
- GET /comments?postId=1
- POST /comments

Albums:
- GET /albums
- GET /albums/{id}
- POST /albums

Photos:
- GET /photos
- GET /photos?albumId=1

Todos:
- GET /todos
- GET /todos/{id}
- POST /todos

Users:
- GET /users
- GET /users/{id}

---

## Estructura del examen

La carpeta Examen-01 contiene los siguientes archivos:

- README.md: Documento explicativo del examen.
- openapi.yaml: Archivo con la documentación completa de la API usando Swagger (OpenAPI 3.0).

---

## Visualización de la documentación

Para visualizar y probar la documentación de la API:

1. Ingresar a https://editor.swagger.io/
2. Copiar el contenido del archivo openapi.yaml.
3. Pegar el contenido en Swagger Editor.
4. Visualizar la documentación interactiva y ejecutar pruebas directamente desde la interfaz.

---

## Consideraciones

- Los métodos POST, PUT, PATCH y DELETE en JSONPlaceholder son simulados, por lo que los cambios no se almacenan realmente.
- El trabajo fue realizado con fines académicos, siguiendo las indicaciones del Examen 01.

---

## Conclusión

Este examen permitió aplicar los conceptos de documentación de APIs REST mediante Swagger, reforzando el uso de OpenAPI 3.0 y la importancia de una documentación clara para el desarrollo y consumo de servicios web.

Autor: Axel Manotoa  
Examen 01 – Swagger
