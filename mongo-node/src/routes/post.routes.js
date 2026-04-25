import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

// Listar todos los posts
router.get("/", postController.getAll);

// Renderizar formulario de creación
router.get("/create", postController.renderCreateForm);

// Procesar creación de post
router.post("/create", postController.create);

// Renderizar formulario de edición
router.get("/edit/:id", postController.renderEditForm);

// Procesar actualización de post
router.post("/edit/:id", postController.update);

// Procesar eliminación de post
router.post("/delete/:id", postController.delete);

export default router;
