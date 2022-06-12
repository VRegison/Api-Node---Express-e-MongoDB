import express from "express";
import db from "./config/dbConnect.js";
import router from "./routes/index.js";

db.on("erro", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco tudo certo");
});

const app = express(); // definindo express

app.use(express.json()); // permitir dados json
router(app);

export default app;
