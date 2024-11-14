import express from "express";
import cors from "cors";
import { sequelize, initDb } from "./db/sequelize.mjs";
import { loginRouteur } from "./routes/loginRouter.mjs";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(cors({ origin: `http://localhost: ${process.env.PROJECT_CORS}`, credentials: true }));

sequelize
  .authenticate()
  .then((_) =>
    console.log("La connexion à la base de donnée a bien été établie")
  )
  .catch((error) => console.error("Impossible de se connecter à la DB"));

initDb();

app.get("/", (req, res) => {
  res.send("Le system est lancé");
});

app.get("/", (req, res) => {
  res.redirect(`http://localhost:${process.env.PROJECT_PORT}`);
});



app.use("/api/login", loginRouteur);

app.listen(process.env.PROJECT_PORT, () => {
  console.log(`Example app listening on port ${process.env.PROJECT_PORT}`);
});

app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json(message);
});
