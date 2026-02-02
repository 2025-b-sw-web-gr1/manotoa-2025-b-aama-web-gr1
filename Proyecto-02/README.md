# Examen Web 001 - API RESTful (NestJS + TypeORM + SQLite)

## ✅ Objetivo
Implementar una API RESTful básica en NestJS con una base de datos SQLite usando TypeORM. Relación: un `Team` tiene muchos `Player`.

## 📁 Estructura
- `src/teams` - entidad, DTOs, servicio y controlador de `Team`.
- `src/players` - entidad, DTOs, servicio y controlador de `Player`.

## 🚀 Instalación
1. Instalar dependencias

```bash
npm install
```

2. Ejecutar en modo desarrollo

```bash
npm run start:dev
```

El servidor queda escuchando en http://localhost:3000 y TypeORM creará `db.sqlite` automáticamente.

## 🧾 Documentación Swagger
1. Instalar dependencias necesarias (si no se instalaron antes en el paso anterior):

```bash
npm install @nestjs/swagger swagger-ui-express
```

2. Acceder a la documentación en:

```
http://localhost:3000/api
```

En la página Swagger encontrarás todos los endpoints (Teams y Players) documentados con sus DTOs.

## 🔧 Endpoints
Teams
- GET    /teams → obtener todos los equipos
- GET    /teams/:id → obtener un equipo por ID (incluye `players` en la respuesta)
- POST   /teams → crear un equipo
- PUT    /teams/:id → actualizar un equipo
- DELETE /teams/:id → eliminar un equipo
- GET    /teams/:id/players → obtener jugadores de un equipo

Players
- GET    /players → obtener todos los jugadores
- GET    /players/:id → obtener un jugador por ID
- POST   /players → crear un jugador
- PUT    /players/:id → actualizar un jugador
- DELETE /players/:id → eliminar un jugador

## 🧪 Ejemplos (curl)
Crear un equipo:
```bash
curl -X POST http://localhost:3000/teams -H "Content-Type: application/json" -d '{"name":"Equipo A","country":"Chile"}'
```
Crear un jugador (opcionalmente asignando `teamId`):
```bash
curl -X POST http://localhost:3000/players -H "Content-Type: application/json" -d '{"name":"Juan","position":"Delantero","teamId":1}'
```
Listar jugadores de un equipo:
```bash
curl http://localhost:3000/teams/1/players
```

## ✔️ Criterios de evaluación
- Código subido en `Examen-Web-001` ✅
- Conexión a SQLite configurada y funcionando ✅
- Entidades con relación 1 a muchos (Team -> Players) ✅
- Endpoints CRUD implementados para Teams y Players ✅
- README con instrucciones y ejemplos ✅


