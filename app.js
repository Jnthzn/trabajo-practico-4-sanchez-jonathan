import express from "express";
import { startDB } from "./src/config/database.js";
import "./src/models/movie.model.js";

const app = express();
const PORT = 3000;

app.use(express.json());

startDB();

app.use("/", (req, res) => {
  return res.json({ message: "bienvenido" });
});

app.listen(PORT, async () => {
  await console.log(`Servidor listo corriendo en http://localhost:${PORT}`);
});
