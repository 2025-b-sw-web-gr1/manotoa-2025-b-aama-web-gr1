# Proyecto 1 a Muchos – API REST Equipos y Jugadores

Autor: Axel Manotoa  
Asignatura: Desarrollo Web  
Proyecto: Diseño y Documentación de APIs RESTful  
Relación: 1 a muchos (Equipo → Jugadores)

Introducción  
En este proyecto se diseñó, implementó, probó y documentó una API RESTful que modela una relación uno a muchos, donde un equipo de fútbol puede tener varios jugadores y cada jugador pertenece a un único equipo. El desarrollo se realizó con fines académicos, aplicando los principios del estándar RESTful, el uso correcto de métodos HTTP, la validación de endpoints mediante herramientas de testing y la documentación formal de la API usando Swagger bajo la especificación OpenAPI 3.0.

Fundamentos RESTful aplicados  
La API sigue los principios RESTful, utilizando URLs claras para representar recursos, métodos HTTP estándar para las operaciones CRUD, intercambio de datos en formato JSON y un diseño stateless, donde cada petición contiene toda la información necesaria para ser procesada por el servidor. Estos principios permiten que la API sea escalable, fácil de mantener y comprensible para otros desarrolladores.

Descripción de la relación 1 a muchos  
La relación principal del proyecto es de tipo uno a muchos. Un Team (equipo) puede tener asociados múltiples Players (jugadores), mientras que cada Player pertenece a un solo Team. Esta relación se implementa mediante el campo teamId dentro de la entidad Player, el cual referencia al id del equipo al que pertenece. La relación se expone de forma explícita a través del endpoint /teams/{id}/players, que permite obtener todos los jugadores asociados a un equipo específico. Por ejemplo, un equipo con id igual a 1 tendrá asociados todos los jugadores cuyo teamId sea 1.

Modelo de datos  
El modelo de datos está compuesto por dos entidades principales. Team contiene información básica del equipo como identificador, nombre y país. Player contiene información del jugador como identificador, nombre, posición, edad y el identificador del equipo al que pertenece. Este modelo permite representar claramente la relación jerárquica entre equipos y jugadores y facilita futuras extensiones del sistema.

Tecnologías y herramientas utilizadas  
Para el desarrollo del proyecto se utilizaron Node.js como entorno de ejecución, json-server para simular un backend RESTful sin necesidad de una implementación compleja, Bruno como herramienta para la prueba y validación de los endpoints HTTP, Swagger junto con OpenAPI 3.0 para la documentación formal de la API, Visual Studio Code como editor de desarrollo y Git y GitHub para el control de versiones y la entrega del proyecto.

Estructura del proyecto  
El proyecto se organiza en una carpeta principal Proyecto-1aMuchos. Dentro de ella se encuentra la carpeta api, que contiene los archivos db.json con los datos simulados, routes.json para definir rutas personalizadas y package.json para la configuración y ejecución del backend mock. La carpeta bruno contiene la colección de pruebas organizada en carpetas para teams y players, junto con el archivo bruno.json generado automáticamente por la herramienta. La carpeta swagger contiene el archivo football-api.yaml con la documentación completa de la API. Finalmente, el archivo README.md describe el proyecto y su funcionamiento.

Backend mock (API local)  
El backend fue implementado utilizando json-server, lo que permite simular una API REST real con persistencia de datos en un archivo JSON. Esta aproximación facilita el desarrollo y las pruebas sin necesidad de un servidor backend completo. Para ejecutar la API se debe ingresar a la carpeta api y ejecutar los comandos npm install y npm run dev. Una vez iniciado, el servidor queda disponible en la URL http://localhost:3000, desde donde se pueden consumir todos los endpoints definidos.

Endpoints implementados  
Para la entidad Team se implementaron los endpoints GET /teams para obtener todos los equipos, GET /teams/{id} para obtener un equipo específico, POST /teams para crear un nuevo equipo, PUT /teams/{id} para actualizar completamente un equipo existente y DELETE /teams/{id} para eliminar un equipo. Para la entidad Player se implementaron GET /players, GET /players/{id}, POST /players, PUT /players/{id} y DELETE /players/{id}. Adicionalmente, para representar la relación uno a muchos, se implementó el endpoint GET /teams/{id}/players, que retorna todos los jugadores asociados a un equipo específico.

Pruebas con Bruno  
Se creó una colección en Bruno para probar todos los endpoints de la API contra el backend local. Las pruebas incluyeron peticiones GET para consulta de datos, POST para creación de recursos, PUT para actualización y DELETE para eliminación. Los resultados obtenidos fueron los códigos de estado esperados: 200 OK para consultas y actualizaciones exitosas, y 201 Created para la creación de nuevos recursos. Todas las peticiones fueron ejecutadas correctamente, validando el correcto funcionamiento de la API.

Documentación con Swagger  
La documentación de la API fue realizada utilizando Swagger bajo el estándar OpenAPI 3.0, permitiendo describir de forma clara los endpoints, métodos HTTP, parámetros, cuerpos de petición, respuestas y esquemas de datos. El archivo swagger/football-api.yaml contiene toda la definición de la API. Para visualizar la documentación se debe ingresar a https://editor.swagger.io/, copiar el contenido del archivo YAML y pegarlo en el editor, lo que permite visualizar una interfaz interactiva y probar los endpoints directamente desde la documentación.

Conclusión  
Este proyecto permitió aplicar de manera integral los conceptos de diseño de APIs RESTful, modelando una relación uno a muchos de forma clara y funcional. A través del uso de json-server, Bruno y Swagger, se logró construir, probar y documentar una API completa, reforzando la importancia de las buenas prácticas en el desarrollo de servicios web, la validación de endpoints y la documentación como elemento clave para el mantenimiento y consumo de una API.
