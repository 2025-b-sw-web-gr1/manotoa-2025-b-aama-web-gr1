

# 📄 **README.md — Taller Clase 007: Motores de Renderizado Web (PUG)**

# 🚀 Taller Clase 007 – Motor de Renderizado: **Pug**

Este proyecto forma parte del taller de la **Clase 007**, donde el objetivo es crear una página web utilizando un **motor de renderizado diferente a EJS**, entender su configuración y presentar una página funcional renderizada desde el servidor.

Para este trabajo se utilizó **Node.js + Express + Pug**.

---

## 📌 **1. ¿Qué es un motor de renderizado?**

Un motor de renderizado es una herramienta que permite tomar **plantillas** (archivos con estructura HTML simplificada) y **datos dinámicos** para convertirlos en páginas HTML completas.

En pocas palabras:

👉 **Plantilla (Pug) + Datos (app.js) → HTML final (lo que ve el usuario en el navegador)**

Esto evita escribir HTML repetitivo y permite crear interfaces dinámicas de manera más ordenada.

---

## 📌 **2. Motor de renderizado elegido: PUG**

Para este taller elegí **Pug**, un motor de plantillas muy usado en Node.js.

### ✔ ¿Por qué elegí Pug?

* Su sintaxis es más corta y limpia que HTML.
* Permite escribir código estructurado con indentación.
* Se integra muy bien con Express.
* Facilita trabajar con layout base + páginas específicas.

---

## 📌 **3. Diferencias entre Pug y EJS**

| Característica       | EJS                 | Pug                                                    |
| -------------------- | ------------------- | ------------------------------------------------------ |
| Sintaxis             | HTML tradicional    | Basado en indentación (no usa etiquetas `<div></div>`) |
| Variables            | `<%= variable %>`   | `#{variable}` o `= variable`                           |
| Organización         | Más manual          | Usa `extend`, `layout`, `block`                        |
| Curva de aprendizaje | Más fácil al inicio | Requiere acostumbrarse                                 |
| Legibilidad          | HTML completo       | Código más compacto                                    |

---

## 📌 **4. Ventajas y desventajas encontradas**

### ⭐ **Ventajas**

* Código más corto y fácil de mantener.
* Permite crear layouts reutilizables.
* Integración muy sencilla con Express.
* Buen manejo de estructuras como loops y condicionales.

### ⚠️ **Desventajas**

* La sintaxis puede ser confusa al inicio.
* La indentación es muy estricta: si se rompe, no renderiza.
* No es HTML tradicional, así que toca adaptarse.

---

## 📌 **5. ¿Qué se construyó en este proyecto?**

Se creó un **portafolio personal completo**, incluyendo:

* Información personal
* Habilidades
* Aprendizaje actual
* Intereses
* Proyectos recientes
* Educación
* Experiencia
* Objetivos
* Sección de contacto
* Navegación entre secciones
* Diseño moderno usando CSS dentro de Pug

Este portafolio demuestra el uso real de un motor de renderizado con datos dinámicos enviados desde Express hacia las vistas Pug.

---

## 📌 **6. Tecnologías utilizadas**

* **Node.js**
* **Express**
* **Pug**
* **HTML generado dinámicamente**
* **CSS dentro del layout principal**
* **JavaScript (server-side)**

---

## 📌 **7. Estructura del proyecto**

```
clase007-pug/
│
├── app.js                → Servidor Express
├── package.json          → Configuración del proyecto
│
└── views/                → Plantillas Pug
    ├── layout.pug        → Plantilla base
    └── index.pug         → Contenido del portafolio
```

---

## 📌 **8. ¿Cómo correr el proyecto?**

### 1. Instalar dependencias:

```
npm install
```

### 2. Ejecutar el servidor:

```
npm start
```

### 3. Abrir en el navegador:

```
http://localhost:3000
```

---

## 📌 **9. Resultado final**

El proyecto se ejecuta correctamente y renderiza una página web profesional usando Pug, cumpliendo **todos los requerimientos del profesor**:

✔ Elegir motor distinto a EJS
✔ Investigar y configurarlo
✔ Construir una página con ese motor
✔ Presentar ventajas, desventajas y diferencias
✔ Crear un proyecto funcional usando Node.js + Express

---

## 📌 **10. Autor**

**Axel**
Estudiante de Desarrollo Web
Quito – Ecuador


