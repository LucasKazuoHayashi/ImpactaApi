const componenteBusiness = require("../business/componenteBusiness");
const produtoBusiness = require("../business/produtoBusiness");

exports.criarComponente = async (req, res) => {
  try {
    const { codigoProduto } = req.params;
    const { codigo, indice, SKU, descricao, preco, quantidade } = req.body;

    const produto = await produtoBusiness.buscarProdutoPorCodigo(codigoProduto);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    if (!codigo) {
      return res.status(400).json({ error: "Código deve ser informado." });
    }

    if (!descricao) {
      return res.status(400).json({ error: "Descricao deve ser informado." });
    }

    if (!indice) {
      return res.status(400).json({ error: "Indice deve ser informado." });
    }

    if (!SKU) {
      return res.status(400).json({ error: "SKU deve ser informado." });
    }

    const existingComponente =
      await componenteBusiness.buscarComponentePorCodigo(codigo);

    if (existingComponente) {
      return res
        .status(400)
        .json({ error: "Código já cadastrado para o componente." });
    }

    const newComponente = await componenteBusiness.criarComponente(
      codigo,
      indice,
      SKU,
      descricao,
      preco,
      quantidade,
      produto.id
    );

    res.status(201).json(newComponente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar o componente." });
  }
};

exports.buscarComponentePorIndice = async (req, res) => {
  try {
    const { codigoProduto, indice } = req.params;

    const produto = await produtoBusiness.buscarProdutoPorCodigo(codigoProduto);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    const componente = await componenteBusiness.buscarComponentePorIndice(
      produto.id,
      indice
    );

    if (!componente) {
      return res.status(404).json({ error: "Componente não encontrado." });
    }
    res.status(200).json(componente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar componente." });
  }
};

exports.listarComponentesDeProduto = async (req, res) => {
  try {
    const { codigoProduto } = req.params;

    const produto = await produtoBusiness.buscarProdutoPorCodigo(codigoProduto);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    const componentes = await componenteBusiness.listarComponentesDeProduto(
      produto.id
    );

    res.status(200).json(componentes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao listar componentes do produto." });
  }
};

exports.buscarComponentePorDescricao = async (req, res) => {
  try {
    const { descricao } = req.query;

    const componente = await componenteBusiness.buscarComponentePorDescricao(
      descricao
    );

    if (!componente) {
      return res.status(404).json({ error: "Componente não encontrado." });
    }

    res.status(200).json(componente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar componente." });
  }
};
