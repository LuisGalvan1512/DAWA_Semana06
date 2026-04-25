# Luis Galvan - Social Media Platform 🚀

![Banner](https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1200&h=400)

Una aplicación web moderna y minimalista desarrollada con **Node.js**, **Express** y **MongoDB**, diseñada para ofrecer una experiencia premium en la gestión de publicaciones.

## 🌟 Características

- **Arquitectura de Capas**: Implementación del patrón Repositorio para un código limpio y escalable.
- **Modelos Robustos**: Esquemas de Mongoose con validaciones estrictas y middleware para fechas de actualización.
- **Diseño Premium**: Interfaz basada en Materialize CSS con estética *Glassmorphism* y tipografías modernas (*Outfit* & *Playfair Display*).
- **CRUD Completo**: Gestión total de publicaciones (Crear, Leer, Editar, Eliminar) mediante una interfaz fluida.
- **Base de Datos NoSQL**: Relaciones entre usuarios y posts mediante ObjectIds.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.
- **Base de Datos**: MongoDB, Mongoose (ODM).
- **Vistas**: EJS (Embedded JavaScript templates).
- **Estilos**: Materialize CSS, Google Fonts.
- **Utilidades**: Dotenv, Nodemon.

## 📂 Estructura del Proyecto

```text
mongo-node/
├── src/
│   ├── db/            # Conexión a MongoDB
│   ├── models/        # Esquemas de Mongoose
│   ├── repositories/  # Capa de acceso a datos
│   ├── services/      # Lógica de negocio
│   ├── controllers/   # Gestión de peticiones
│   ├── routes/        # Definición de endpoints
│   └── views/         # Plantillas EJS
├── app.js             # Entrada de la aplicación
└── .env               # Configuración de entorno
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repo-url>
   cd mongo-node
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env` en la raíz con:
   ```env
   MONGO_URI=mongodb://localhost:27017/socialmedia
   PORT=3001
   ```

4. **Poblar la base de datos (Opcional)**
   Si deseas autores de prueba listos para usar:
   ```bash
   node seed.js
   ```

5. **Iniciar el servidor**
   ```bash
   npm run dev
   ```
   Visita: `http://localhost:3001`

## ✒️ Autor

Desarrollado con ❤️ por **Luis Galvan**.

---
© 2026 Luis Galvan Social Platform
