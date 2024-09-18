-- DROP TABLE endereco;

CREATE TABLE endereco (
	id bigserial NOT NULL,
	bairro varchar(255) NOT NULL,
	cep varchar(255) NOT NULL,
	cidade varchar(255) NOT NULL,
	complemento varchar(255) NULL,
	logradouro varchar(255) NOT NULL,
	num varchar(255) NOT NULL,
	CONSTRAINT endereco_pkey PRIMARY KEY (id)
);

-- DROP TABLE produto;

CREATE TABLE produto (
	id bigserial NOT NULL,
	descricao varchar(255) NULL,
	nome varchar(255) NOT NULL,
	CONSTRAINT produto_pkey PRIMARY KEY (id)
);

-- DROP TABLE cliente;

CREATE TABLE cliente (
	endereco_id int8 NULL,
	id bigserial NOT NULL,
	cpf_cnpj varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	nome varchar(255) NOT NULL,
	telefone varchar(255) NOT NULL,
	CONSTRAINT cliente_cpf_cnpj_key UNIQUE (cpf_cnpj),
	CONSTRAINT cliente_endereco_id_key UNIQUE (endereco_id),
	CONSTRAINT cliente_pkey PRIMARY KEY (id),
	CONSTRAINT fk64nr9yt889by5lufr1boo5i4s FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);

-- DROP TABLE fornecedor;

CREATE TABLE fornecedor (
	endereco_id int8 NULL,
	id bigserial NOT NULL,
	cpf_cnpj varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	nome varchar(255) NOT NULL,
	telefone varchar(255) NOT NULL,
	CONSTRAINT fornecedor_endereco_id_key UNIQUE (endereco_id),
	CONSTRAINT fornecedor_pkey PRIMARY KEY (id),
	CONSTRAINT fka5cmg84gyu6bji8b3rsa08ndb FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);

-- DROP TABLE usuario;

CREATE TABLE usuario (
	endereco_id int8 NULL,
	id bigserial NOT NULL,
	cpf varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	nome varchar(255) NOT NULL,
	senha varchar(255) NOT NULL,
	telefone varchar(255) NOT NULL,
	CONSTRAINT usuario_cpf_key UNIQUE (cpf),
	CONSTRAINT usuario_email_key UNIQUE (email),
	CONSTRAINT usuario_endereco_id_key UNIQUE (endereco_id),
	CONSTRAINT usuario_pkey PRIMARY KEY (id),
	CONSTRAINT usuario_telefone_key UNIQUE (telefone),
	CONSTRAINT fk8fl5dxscva53gw12f19q6qxf8 FOREIGN KEY (endereco_id) REFERENCES endereco(id)
);


CREATE TABLE estoque (
	preco_prod float8 NOT NULL,
	emp_id int8 NOT NULL,
	id bigserial NOT NULL,
	prod_id int8 NOT NULL,
	quant_estoque int8 NOT NULL,
	CONSTRAINT estoque_pkey PRIMARY KEY (id),
	CONSTRAINT fkevmu9otbl5vnvgcusw566mnga FOREIGN KEY (emp_id) REFERENCES empresa(id),
	CONSTRAINT fksfhh3hob6dhk3ejb5sig7xb59 FOREIGN KEY (prod_id) REFERENCES produto(id)
);

-- DROP TABLE venda;

CREATE TABLE venda (
	qtd_itens int4 NOT NULL,
	qtd_parcelas_falta int4 NULL,
	qtd_parcelas_total int4 NOT NULL,
	valor_total_venda float4 NOT NULL,
	id bigserial NOT NULL,
	id_cli int8 NOT NULL,
	dt_venda timestamp(6) NOT NULL,
	CONSTRAINT venda_pkey PRIMARY KEY (id),
	CONSTRAINT fkshu2cawpyv0499otc2adu1cvs FOREIGN KEY (id_cli) REFERENCES cliente(id)
);

-- DROP TABLE compra;

CREATE TABLE compra (
	valor_total float8 NOT NULL,
	dt_compra timestamp(6) NOT NULL,
	fornecedor_id int8 NULL,
	id bigserial NOT NULL,
	CONSTRAINT compra_pkey PRIMARY KEY (id),
	CONSTRAINT fk4go8vtn4msugmpbf6wwkpumkb FOREIGN KEY (fornecedor_id) REFERENCES fornecedor(id)
);

-- DROP TABLE empresa;

CREATE TABLE empresa (
	endereco_id int8 NULL,
	id bigserial NOT NULL,
	usuario_id int8 NOT NULL,
	cpf_cnpj varchar(255) NULL,
	nome varchar(255) NOT NULL,
	CONSTRAINT empresa_cpf_cnpj_key UNIQUE (cpf_cnpj),
	CONSTRAINT empresa_endereco_id_key UNIQUE (endereco_id),
	CONSTRAINT empresa_pkey PRIMARY KEY (id),
	CONSTRAINT fk1bsdq6lhlktaf86nwgbftqrag FOREIGN KEY (endereco_id) REFERENCES endereco(id),
	CONSTRAINT fks12udhh8f7taklesp1phv0ikg FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- DROP TABLE estoque;

CREATE TABLE estoque (
	preco_prod float8 NOT NULL,
	emp_id int8 NOT NULL,
	id bigserial NOT NULL,
	prod_id int8 NOT NULL,
	quant_estoque int8 NOT NULL,
	CONSTRAINT estoque_pkey PRIMARY KEY (id),
	CONSTRAINT fkevmu9otbl5vnvgcusw566mnga FOREIGN KEY (emp_id) REFERENCES empresa(id),
	CONSTRAINT fksfhh3hob6dhk3ejb5sig7xb59 FOREIGN KEY (prod_id) REFERENCES produto(id)
);

-- DROP TABLE item_compra;

CREATE TABLE item_compra (
	preco_prod_compra float8 NOT NULL,
	qtd_comprada float8 NOT NULL,
	valor_total_item_compra float8 NOT NULL,
	compra_id int8 NOT NULL,
	estoque_id int8 NOT NULL,
	CONSTRAINT item_compra_pkey PRIMARY KEY (compra_id, estoque_id),
	CONSTRAINT fkl9c4c929ngkqyifcrjbdk07i3 FOREIGN KEY (estoque_id) REFERENCES estoque(id),
	CONSTRAINT fkovscx99wpxanu7sytiqarv700 FOREIGN KEY (compra_id) REFERENCES compra(id)
);


-- DROP TABLE item_venda;

CREATE TABLE item_venda (
	valor_total_itemv float8 NOT NULL,
	estoque_id int8 NOT NULL,
	qtd_vendida int8 NOT NULL,
	venda_id int8 NOT NULL,
	CONSTRAINT item_venda_pkey PRIMARY KEY (estoque_id, venda_id),
	CONSTRAINT fkbl4vy8qe3xhoerrkdpcx8pafa FOREIGN KEY (estoque_id) REFERENCES estoque(id),
	CONSTRAINT fkkiky88fkai72328rhw3r3yebx FOREIGN KEY (venda_id) REFERENCES venda(id)
);

-- Drop da tabela item_compra
DROP TABLE IF EXISTS item_compra;

-- Drop da tabela item_venda
DROP TABLE IF EXISTS item_venda;

-- Drop da tabela compra
DROP TABLE IF EXISTS compra;

-- Drop da tabela venda
DROP TABLE IF EXISTS venda;

-- Drop da tabela estoque
DROP TABLE IF EXISTS estoque;

-- Drop da tabela cliente
DROP TABLE IF EXISTS cliente;

-- Drop da tabela fornecedor
DROP TABLE IF EXISTS fornecedor;

-- Drop da tabela produto
DROP TABLE IF EXISTS produto;

-- Drop da tabela empresa
DROP TABLE IF EXISTS empresa;

--Drop da tabela usuario
DROP TABLE IF EXISTS usuario;

--Drop da tabela endereco
DROP TABLE IF EXISTS endereco;



------------------------------------------------------------------------------------------
--INSERT
------------------------------------------------------------------------------------------
-- Inserts para a tabela endereco
INSERT INTO endereco (id, bairro, cep, cidade, complemento, logradouro, num) VALUES 
(1, 'Centro', '12345-678', 'São Paulo', 'Apt 101', 'Rua das Flores', '123'),
(2, 'Jardim Paulista', '23456-789', 'São Paulo', 'Bloco B', 'Avenida Brasil', '456'),
(3, 'Moema', '34567-890', 'São Paulo', 'Casa', 'Rua Gaivota', '789');

-- Inserts para a tabela produto
INSERT INTO produto (id, descricao, nome) VALUES 
(1, 'Medicamento para dor de cabeça', 'Analgésico'),
(2, 'Suplemento alimentar', 'Vitaminas'),
(3, 'Equipamento hospitalar', 'Estetoscópio');

-- Inserts para a tabela cliente
INSERT INTO cliente (id, endereco_id, cpf_cnpj, email, nome, telefone) VALUES 
(1, 1, '123.456.789-00', 'cliente1@example.com', 'João Silva', '(11) 91234-5678'),
(2, 2, '987.654.321-00', 'cliente2@example.com', 'Maria Oliveira', '(11) 92345-6789'),
(3, 3, '456.789.123-00', 'cliente3@example.com', 'Carlos Pereira', '(11) 93456-7890');

-- Inserts para a tabela fornecedor
INSERT INTO fornecedor (id, endereco_id, cpf_cnpj, email, nome, telefone) VALUES 
(1, 1, '01.234.567/0001-89', 'fornecedor1@example.com', 'Distribuidora XYZ', '(11) 94567-8901'),
(2, 2, '98.765.432/0001-12', 'fornecedor2@example.com', 'Farmacêutica ABC', '(11) 95678-9012'),
(3, 3, '12.345.678/0001-34', 'fornecedor3@example.com', 'Equipamentos Médicos LTDA', '(11) 96789-0123');

-- Inserts para a tabela usuario
INSERT INTO usuario (id, endereco_id, cpf, email, nome, senha, telefone) VALUES 
(1, 1, '111.222.333-44', 'usuario1@example.com', 'Ana Costa', 'senha123', '(11) 97890-1234'),
(2, 2, '555.666.777-88', 'usuario2@example.com', 'Lucas Santos', 'senha456', '(11) 98901-2345'),
(3, 3, '999.000.111-22', 'usuario3@example.com', 'Mariana Lima', 'senha789', '(11) 99012-3456');

-- Inserts para a tabela empresa
INSERT INTO empresa (id, endereco_id, usuario_id, cpf_cnpj, nome) VALUES 
(1, 1, 1, '12.345.678/0001-90', 'Empresa A'),
(2, 2, 2, '98.765.432/0001-11', 'Empresa B'),
(3, 3, 3, '23.456.789/0001-12', 'Empresa C');

-- Inserts para a tabela estoque
INSERT INTO estoque (id, preco_prod, emp_id, prod_id, quant_estoque) VALUES 
(1, 15.99, 1, 1, 100),
(2, 29.99, 1, 2, 50),
(3, 199.99, 1, 3, 10);

-- Inserts para a tabela venda
INSERT INTO venda (id, qtd_itens, qtd_parcelas_falta, qtd_parcelas_total, valor_total_venda, id_cli, dt_venda) VALUES 
(1, 2, 1, 2, 31.98, 1, NOW()),
(2, 1, NULL, 1, 29.99, 2, NOW()),
(3, 3, 2, 3, 599.97, 3, NOW());

-- Inserts para a tabela compra
INSERT INTO compra (id, valor_total, dt_compra, fornecedor_id) VALUES 
(1, 1599.90, NOW(), 1),
(2, 2999.80, NOW(), 2),
(3, 499.97, NOW(), 3);

-- Inserts para a tabela item_compra
INSERT INTO item_compra (compra_id, estoque_id, preco_prod_compra, qtd_comprada, valor_total_item_compra) VALUES 
(1, 1, 15.99, 100, 1599.00),
(2, 2, 29.99, 100, 2999.00),
(3, 3, 199.99, 5, 999.95);

-- Inserts para a tabela item_venda
INSERT INTO item_venda (estoque_id, venda_id, valor_total_itemv, qtd_vendida) VALUES 
(1, 1, 15.99, 2),
(2, 2, 29.99, 1),
(3, 3, 199.99, 3);