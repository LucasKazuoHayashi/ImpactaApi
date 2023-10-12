const express = require("express");
const router = express.Router();
const componenteController = require("../controllers/componenteController");

router
  .post("/:codigoProduto/componente", componenteController.criarComponente)
  .get(
    "/:codigoProduto/componente/:indice",
    componenteController.buscarComponentePorIndice
  )
  .get(
    "/:codigoProduto/componente",
    componenteController.listarComponentesDeProduto
  );

module.exports = router;
