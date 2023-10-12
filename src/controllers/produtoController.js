const produtoBusiness = require("../business/produtoBusiness");

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await produtoBusiness.listarProdutos();
    res.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar produtos." });
  }
};

exports.buscarProdutoPorCodigo = async (req, res) => {
  try {
    const codigo = req.params.codigo;
    const produto = await produtoBusiness.buscarProdutoPorCodigo(codigo);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    res.status(200).json(produto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produto." });
  }
};

exports.criarProduto = async (req, res) => {
  try {
    const { codigo, nome } = req.body;

    if (!codigo) {
      return res.status(400).json({ error: "Código deve ser informado." });
    }

    if (!nome) {
      return res.status(400).json({ error: "Nome deve ser informado." });
    }

    const existingProduto = await produtoBusiness.buscarProdutoPorCodigo(
      codigo
    );

    if (existingProduto) {
      return res
        .status(400)
        .json({ error: "Código já cadastrado para o produto." });
    }

    const newProduto = await produtoBusiness.criarProduto(codigo, nome);
    res.status(201).json(newProduto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar o produto." });
  }
};
