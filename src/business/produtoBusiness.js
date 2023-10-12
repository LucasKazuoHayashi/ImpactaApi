const db = require("../db");

const listarProdutos = async () => {
  return await db.any("SELECT * FROM produto");
};

const buscarProdutoPorCodigo = async (codigo) => {
  return await db.oneOrNone("SELECT * FROM produto WHERE codigo = $1", [
    codigo,
  ]);
};

const criarProduto = async (codigo, nome) => {
  return await db.one(
    "INSERT INTO produto(codigo, nome) VALUES($1, $2) RETURNING *",
    [codigo, nome]
  );
};

module.exports = {
  listarProdutos,
  buscarProdutoPorCodigo,
  criarProduto,
};
