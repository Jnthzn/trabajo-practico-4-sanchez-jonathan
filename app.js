import express from "express";

const app = express;
const PORT = 3000;

app.use(express.json());

app.use("/", (req, res) => {
  return res.json({ message: "bienvenido" });
});

app.listen(PORT, async () => {
  await console.log(`Servidor listo corriendo en https://localhost:${PORT}`);
});
