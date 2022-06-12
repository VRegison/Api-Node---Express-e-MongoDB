import express from "express";
import autores from "./autoresRouter.js";
import livros from "./livrosRouter.js";

const router = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "API Em Node" });
  });

  app.use(express.json(), livros, autores);
};

export default router;
