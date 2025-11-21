const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Configurar Pug como motor de vistas
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Ruta principal
app.get("/", (req, res) => {
  const data = {
    nombre: "Axel",
    rolActual: "Estudiante de Desarrollo Web",
    ubicacion: "Quito, Ecuador",
    descripcionCorta: "Me gusta aprender tecnologías nuevas y construir proyectos que mezclen diseño, lógica y datos.",
    descripcionLarga:
      "Estoy empezando en el mundo del desarrollo web. Me interesa crear interfaces claras, entender cómo funciona el backend y usar la inteligencia artificial para automatizar tareas. Mi objetivo es seguir practicando con proyectos reales y mejorar un poco cada día.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Pug",
      "Git / GitHub",
      "Diseño básico UI"
    ],
    aprendizajeActual: [
      "Motores de renderizado (EJS, Pug, Handlebars)",
      "Buenas prácticas con Node.js y Express",
      "Cómo consumir APIs desde el frontend",
      "Uso de inteligencia artificial como apoyo al desarrollo"
    ],
    educacion: [
      {
        titulo: "Estudios en Desarrollo de Aplicaciones Web",
        institucion: "Instituto / Universidad",
        anio: "Actualidad",
        detalle: "Enfoque en HTML, CSS, JavaScript, Node.js y bases de datos."
      },
      {
        titulo: "Cursos en línea",
        institucion: "Plataformas digitales",
        anio: "Varios",
        detalle: "Cursos de programación, IA aplicada y herramientas para productividad."
      }
    ],
    experiencia: [
      {
        rol: "Proyectos personales",
        lugar: "Freelance / Estudiante",
        periodo: "2024 - 2025",
        detalle:
          "Clon de interfaces, pequeñas páginas informativas y prácticas con Express y motores de plantillas."
      },
      {
        rol: "Trabajo en equipo en clase",
        lugar: "Proyectos académicos",
        periodo: "2024",
        detalle:
          "Desarrollo de proyectos usando control de versiones, organización por tareas y entrega por módulos."
      }
    ],
    proyectos: [
      {
        titulo: "Proyecto 1",
        detalle: "Página estática con HTML y CSS enfocada en buena estructura semántica."
      },
      {
        titulo: "Proyecto 2",
        detalle: "Aplicación sencilla con Node.js y Express que muestra datos dinámicos."
      },
      {
        titulo: "Proyecto 3",
        detalle: "Clon de una página conocida para practicar maquetación y estilos."
      }
    ],
    objetivos: [
      "Mejorar mi lógica de programación y estructuras de datos.",
      "Dominar un stack completo para desarrollo web (frontend y backend).",
      "Crear un portafolio sólido con proyectos reales.",
      "Aprender a desplegar aplicaciones en producción (cloud / hosting)."
    ],
    intereses: [
      "Desarrollo web",
      "Inteligencia artificial",
      "Automatización de procesos",
      "Diseño de interfaces",
      "Tecnología y hardware"
    ],
    contacto: {
      email: "axel.manotoa@epn.edu.ec",
      github: "https://github.com/Axel112004",
      linkedin: "https://www.linkedin.com/in/tu-perfil"
    }
  };

  res.render("index", data);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
