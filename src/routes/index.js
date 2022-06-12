import express from "express";
import livros from "./livrosRouter.js";

const router = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ titulo: "API Em Node" });
  });

  app.use(express.json(), livros);
};

export default router;
