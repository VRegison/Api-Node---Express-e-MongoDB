import { Router } from "express";
import LivroController from "../controllers/livrosController.js";

const router = Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/buscarNome", LivroController.listarLivroPorNome)

  .get("/livros/busca", LivroController.listarLivroPorEditora)

  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro);

export default router;
