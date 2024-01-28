const express = require("express");
const app = express();
const porta = 443;

app.get("/", function (req, res) {
  /* res.send("Bem Vindo ao Servidor Web utilizando o Express"); */
  res.json("Bem Vindo ao Servidor Web utilizando o Express");
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
