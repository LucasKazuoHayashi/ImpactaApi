const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const componenteController = require("../controllers/componenteController");

router
  .get("/componente", componenteController.buscarComponentePorDescricao)
  .get("/", produtoController.listarProdutos)
  .get("/:codigo", produtoController.buscarProdutoPorCodigo)
  .post("/", produtoController.criarProduto);

module.exports = router;
