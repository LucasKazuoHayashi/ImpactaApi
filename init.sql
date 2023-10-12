CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(255) UNIQUE NOT NULL,
    nome VARCHAR(255)
);

CREATE TABLE componente (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(255) UNIQUE NOT NULL,
    indice INT,
    SKU VARCHAR(255),
    descricao TEXT,
    preco NUMERIC(10, 2),
    quantidade INT,
    id_Produto INT REFERENCES produto (id)
);