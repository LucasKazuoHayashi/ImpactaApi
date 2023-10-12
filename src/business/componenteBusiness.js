const db = require("../db");

const criarComponente = async (
  codigoProduto,
  indice,
  SKU,
  descricao,
  preco,
  quantidade,
  idProduto
) => {
  return await db.one(
    "INSERT INTO componente(codigo, indice, SKU, descricao, preco, quantidade, id_Produto) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [codigoProduto, indice, SKU, descricao, preco, quantidade, idProduto]
  );
};

const buscarComponentePorCodigo = async (codigo) => {
  return await db.oneOrNone("SELECT * FROM componente WHERE codigo = $1", [
    codigo,
  ]);
};

const buscarComponentePorIndice = async (idProduto, indice) => {
  return await db.oneOrNone(
    "SELECT * FROM componente WHERE id_Produto = $1 AND indice = $2",
    [idProduto, indice]
  );
};

const listarComponentesDeProduto = async (idProduto) => {
  return await db.any("SELECT * FROM componente WHERE id_Produto = $1", [
    idProduto,
  ]);
};

const buscarComponentePorDescricao = async (descricao) => {
  return await db.oneOrNone("SELECT * FROM componente WHERE descricao = $1", [
    descricao,
  ]);
};

module.exports = {
  criarComponente,
  buscarComponentePorCodigo,
  buscarComponentePorIndice,
  listarComponentesDeProduto,
  buscarComponentePorDescricao,
};
