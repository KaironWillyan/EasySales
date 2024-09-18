/*
==============================================================================================
								FUNCTIONS
===============================================================================================
*/

CREATE OR REPLACE FUNCTION PRODUTO_EXISTE(N_PRODUTO VARCHAR(25))
RETURNS BOOLEAN AS $$
DECLARE
PRODUTO_EXISTE BOOLEAN;
BEGIN
SELECT EXISTS(
    SELECT * FROM PRODUTO
    WHERE NOME_PROD = N_PRODUTO
) INTO PRODUTO_EXISTE;

RETURN PRODUTO_EXISTE;
END;
$$ LANGUAGE plpgsql;

--------------------------PRODUTO EXISTE NA EMPRESA?------------------------------------------
CREATE OR REPLACE FUNCTION PRODUTO_EXISTE_NA_EMPRESA(COD_PROD INT, COD_EMP INT)
RETURNS BOOLEAN AS $$
DECLARE
PRODUTO_PERTENCE_EMPRESA BOOLEAN;
BEGIN
SELECT EXISTS (
    SELECT * FROM ESTOQUE
    WHERE EMPID = COD_EMP AND PRODID = COD_PROD
) INTO PRODUTO_PERTENCE_EMPRESA;

RETURN PRODUTO_PERTENCE_EMPRESA;
END;
$$ LANGUAGE plpgsql;

/*
=====================================================================================================
									TRIGGERS
=====================================================================================================
*/


-----------------------VALIDAR VENDA------------------------------------
/*CREATE OR REPLACE FUNCTION T_VALIDAR_VENDA()
RETURNS TRIGGER AS $$
BEGIN
	PERFORM CLIENTE_EXISTE(NEW.CLI)
	PERFORM PRODUTO_EXISTE(NEW.CLI)
END;
$$ LANGUAGE 'plpgsql';

CREATE TRIGGER TRIGGER_VALIDAR_VENDA
BEFORE INSERT OR UPDATE ON VENDA
FOR EACH ROW
EXECUTE PROCEDURE T_VALIDAR_VENDA()*/


----------------------- VALIDAR CLIENTE --------------------------------

CREATE OR REPLACE FUNCTION T_VALIDAR_CLIENTE()
RETURNS TRIGGER AS $$
DECLARE
COD_EMP INT;
BEGIN
SELECT id INTO COD_EMP FROM empresa WHERE nome = current_user;
IF VERIFICAR_CLIENTE_EMPRESA(NEW.cpf, COD_EMP) THEN
		RAISE EXCEPTION 'O CLIENTE JÁ FOI CADASTRADO!';
ELSE
		PERFORM VALIDAR_EMAIL(NEW.email_cli);
		PERFORM VALIDAR_TELEFONE(NEW.telefone);
		PERFORM VALIDAR_CEP(NEW.cep_cli);
		PERFORM VALIDAR_CPF(NEW.cpf);
RETURN NEW;
END IF;
END;
$$ LANGUAGE 'plpgsql';




CREATE TRIGGER TRIGGER_VALIDAR_CLIENTE
    BEFORE INSERT OR UPDATE ON CLIENTE
                         FOR EACH ROW
                         EXECUTE PROCEDURE T_VALIDAR_CLIENTE();

--drop trigger trigger_validar_cliente on cliente


-------------------------------------------------------------------------
--VALIDAR SE EMAIL, TELEFONE, CEP E CPF/CNPJ SEGUEM O PADRÃO CORRETO
---------------------- VALIDAR FORNECEDOR -------------------------------
SELECT CURRENT_USER;

CREATE OR REPLACE FUNCTION T_VALIDAR_FORNECEDOR()
RETURNS TRIGGER AS $$
	DECLARE
COD_EMP INT;
BEGIN
SELECT id_emp INTO COD_EMP FROM empresa WHERE nome_emp = current_user;
IF VERIFICAR_FORNECEDOR_EMPRESA(NEW.cpf_fn, COD_EMP) THEN
		RAISE EXCEPTION 'O FORNECEDOR JÁ FOI CADASTRADO!';
ELSE
		PERFORM VALIDAR_EMAIL(NEW.EMAIL_fn);
		PERFORM VALIDAR_TELEFONE(NEW.TELEFONE_fn);
		PERFORM VALIDAR_CEP(NEW.CEP_fn);

		IF VERIFICAR_CNPJ_CPF(NEW.CPF_fn) THEN
			PERFORM VALIDAR_CNPJ(NEW.CPF_fn);
		ELSEIF VERIFICAR_CNPJ_CPF(NEW.CPF_fn) = FALSE THEN
			PERFORM VALIDAR_CPF(NEW.cpf_fn);
ELSE
			RAISE EXCEPTION 'O valor informado é inválido.';
END IF;

RETURN NEW;
END IF;
END;
$$ LANGUAGE 'plpgsql';


CREATE TRIGGER TRIGGER_VALIDAR_FORNECEDOR
    BEFORE INSERT OR UPDATE ON FORNECEDOR
                         FOR EACH ROW
                         EXECUTE PROCEDURE T_VALIDAR_FORNECEDOR();


---------------------------VALIDAR ----------------------------------------




-------------------------------------------------------------------------
--VALIDAR SE EMAIL, CPF/CNPJ SEGUEM O PADRÃO CORRETO
---------------------- VALIDAR EMPRESA-------------------------------

CREATE OR REPLACE FUNCTION T_VALIDAR_CREDENCIAIS_EMPRESA()
RETURNS TRIGGER AS $$
BEGIN
		PERFORM VALIDAR_EMAIL(NEW.EMAIL_EMP);

		IF VERIFICAR_CNPJ_CPF(NEW.CPF) THEN
			PERFORM VALIDAR_CNPJ(NEW.CPF);
		ELSEIF VERIFICAR_CNPJ_CPF(NEW.CPF) = FALSE THEN
			PERFORM VALIDAR_CPF(NEW.CPF);
ELSE
			RAISE EXCEPTION 'O VALOR INFORMADO É INVÁLIDO.';
END IF;

RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';


CREATE TRIGGER TRIGGER_VALIDAR_CREDENCIAIS_EMPRESA
    BEFORE INSERT OR UPDATE ON EMPRESA
                         FOR EACH ROW
                         EXECUTE PROCEDURE T_VALIDAR_CREDENCIAIS_EMPRESA();



-------------------------PROIBIR QUANT_PARCELAS_FALTA FICAR < 0-----------------------------------


-------------------------PROIBIR DELETAR CLIENTE-------------------------------------------------

CREATE OR REPLACE FUNCTION T_BLOQUEAR_DELETE_CLIENTE()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' AND TG_TABLE_NAME = 'CLIENTE' THEN
        RAISE EXCEPTION 'NÃO É PERMITIDO EXCUIR CLIENTES!';
END IF;

    -- Retorna o resultado do gatilho
RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TRIGGER_BLOQUEAR_DELETE_CLIENTE
    BEFORE DELETE ON CLIENTE
    FOR EACH ROW
    EXECUTE FUNCTION T_BLOQUEAR_DELETE_CLIENTE();



-------------------------PROIBIR DELETAR FORNECEDOR-------------------------------------------------

CREATE OR REPLACE FUNCTION T_BLOQUEAR_DELETE_FORNECEDOR()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' AND TG_TABLE_NAME = 'FORNECEDOR' THEN
        RAISE EXCEPTION 'NÃO É PERMITIDO EXCUIR UM FORNECEDOR!';
END IF;

RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TRIGGER_BLOQUEAR_DELETE_FORNECEDOR
    BEFORE DELETE ON FORNECEDOR
    FOR EACH ROW
    EXECUTE FUNCTION T_BLOQUEAR_DELETE_FORNECEDOR();



------------------------------------VALIDAR SENHA EMPRESA---------------------------------------------
CREATE OR REPLACE FUNCTION T_VALIDAR_SENHA_EMPRESA()
    RETURNS TRIGGER AS $$
BEGIN
    IF LENGTH(NEW.senha_emp) < 4 THEN
        RAISE EXCEPTION 'A senha da empresa deve ter no mínimo 4 caracteres.';
END IF;

RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER validar_senha_empresa_trigger
    BEFORE INSERT OR UPDATE ON empresa
                         FOR EACH ROW
                         EXECUTE FUNCTION  T_VALIDAR_SENHA_EMPRESA();


-------------------------------VALIDAR SE EMPRESA JÁ EXISTE---------------------------------------------
CREATE OR REPLACE FUNCTION T_VALIDAR_NOME_EMPRESA()
    RETURNS TRIGGER AS $$
DECLARE
count INTEGER;
BEGIN
SELECT COUNT(*) INTO count
FROM empresa
WHERE nome_emp = NEW.nome_emp;

IF count > 0 THEN
        RAISE EXCEPTION 'NOME DA EMPRESA JÁ ESTA SENDO UTILIZADO.';
END IF;

RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TRIGGER_VALIDAR_NOME_EMPRESA
    BEFORE INSERT OR UPDATE ON empresa
                         FOR EACH ROW
                         EXECUTE FUNCTION T_VALIDAR_NOME_EMPRESA();


/*
==============================================================================================================
								 CRIAR USER DA EMPRESA
							CADASTROS - FORNECEDOR, CLIENTE
=============================================================================================================
*/
/*----------------------------
	CADASTRAR EMPRESA
*/----------------------------
SELECT * FROM CADASTRAR_EMPRESA('empresa2', 'empresa2@gmail.com', '1234', '653.254.460-45');
SELECT * FROM CADASTRAR_EMPRESA('empresa3', 'empresa3@gmail.com', '1234', '455.797.320-58');
SELECT * FROM CADASTRAR_EMPRESA('empresa4', 'empresa4@gmail.com', '1234', '174.570.640-28');
SELECT * FROM CADASTRAR_EMPRESA('empresa5', 'empresa5@gmail.com', '1234', '303.862.960-06');
SELECT * FROM CADASTRAR_EMPRESA('empresa6', 'empresa6@gmail.com', '1234', '528.934.630-96');

SELECT * FROM EMPRESA
-- Cria uma role estática para os usuários da empresa
CREATE ROLE empresa_users;
--SELECT rolname FROM pg_roles; ->verificar roles existentes

CREATE OR REPLACE FUNCTION CADASTRAR_EMPRESA(
    nome_emp VARCHAR(15),
    email_emp VARCHAR(25),
    senha_emp VARCHAR(8),
	cpf_emp VARCHAR(15)
)
RETURNS void AS
$$
DECLARE
novo_usuario VARCHAR;
BEGIN
    novo_usuario := REPLACE(nome_emp, ' ', '_'); -- Define o nome do usuário trocando espaços em branco por "_"

    -- Cria o usuário e atribui a role
EXECUTE format('CREATE USER %s IN ROLE empresa_users PASSWORD %L', novo_usuario, senha_emp);

-- Concede permissões necessárias ao usuário
EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO %s', novo_usuario);
EXECUTE format('GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO %s', novo_usuario);
EXECUTE format('REVOKE UPDATE, DELETE ON TABLE empresa FROM %s', novo_usuario);
EXECUTE format('REVOKE UPDATE, DELETE ON TABLE produto FROM %s', novo_usuario);

INSERT INTO EMPRESA VALUES (DEFAULT, nome_emp, email_emp, senha_emp, cpf_emp);

RAISE NOTICE 'EMPRESA CADASTRADA COM SUCESSO!';
END;
$$
LANGUAGE 'plpgsql';



SELECT * FROM EMPRESA

SELECT usename FROM pg_user
DROP USER empresa1

SELECT usename, usesuper, usecreatedb, usesysid FROM pg_user WHERE usename = 'empresa1';


/*----------------------------
	CADASTRAR CLIENTE
*/----------------------------

CREATE OR REPLACE FUNCTION CADASTRAR_CLIENTE(
	nome_cli VARCHAR(40),
	CPF_CLI VARCHAR(15),
	bairro_cli VARCHAR(15),
	num_cli VARCHAR(12),
	logradouro_cli VARCHAR(25),
	cep_cli VARCHAR(11),
	cidade_cli VARCHAR(20),
	email_cli VARCHAR(25),
	telefone VARCHAR(15)
)
RETURNS void AS
$$
BEGIN
	--tem um trigger para verificar se o cliente já não foi cadastrado na empresa
INSERT INTO CLIENTE VALUES
    (DEFAULT, nome_cli, cpf_cli, bairro_cli, num_cli, logradouro_cli, cep_cli, cidade_cli, email_cli, telefone, (SELECT id_emp FROM empresa WHERE nome_emp = CURRENT_USER));
RAISE NOTICE 'CLIENTE CADASTRADO COM SUCESSO!';
END;
$$
LANGUAGE 'plpgsql';


SELECT * FROM CADASTRAR_CLIENTE('John Doe', '079.586.023-40', 'Street 1', '123', 'rua200', '64380-000', 'City', 'doezin@hotmail.com', '86 995120059', 3);
SELECT * FROM CADASTRAR_CLIENTE('Abreu', '577.379.240-00', 'Street 2', '321', 'rua202', '64380-000', 'City1', 'abreu@hotmail.com', '86 995120059');
SELECT * FROM CLIENTE
delete from cliente where id_cli = 21


/*----------------------------
	CADASTRAR FORNECEDOR
*/----------------------------
DROP FUNCTION cadastrar_FORNECEDOR(VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR, VARCHAR);
CREATE OR REPLACE FUNCTION CADASTRAR_FORNECEDOR(
	nome_fn           VARCHAR(40),
  	bairro_fn         VARCHAR(20),
  	num_fn            VARCHAR(13),
  	logradouro_fn     VARCHAR(15),
  	cep_fn            VARCHAR(13),
  	cidade_fn         VARCHAR(20),
	telefone_fn		  VARCHAR(15),
	cpf_forn		  VARCHAR(15),
	email_fn		  VARCHAR(25)
)
RETURNS void AS
$$
DECLARE
COD_FORN INT;
BEGIN
		--EXISTE UM TRIGGER PARA TRATAR SE O FORNECEDOR JA FOI CADASTRADO NA EMPRESA
INSERT INTO FORNECEDOR VALUES
    (DEFAULT, nome_fn, bairro_fn, num_fn, logradouro_fn, cep_fn, cidade_fn, telefone_fn, cpf_forn, email_fn, (SELECT id_emp FROM empresa WHERE nome_emp = CURRENT_USER));
RAISE NOTICE 'FORNECEDOR CADASTRADO COM SUCESSO!';
END;
$$
LANGUAGE 'plpgsql';

SELECT * FROM CADASTRAR_FORNECEDOR('Fornecedor A', 'Centro', '123', 'Rua Principal', '12345-678', 'São Paulo', '11123456789', '123.456.789-00', 'fornecedorA@example.com');
SELECT * FROM CADASTRAR_FORNECEDOR('Fornecedor B', 'Bairro A', '789', 'Avenida Dois', '98765-432', 'Teresina', '21987654321', '987.654.321-00', 'fornecedorB@example.com');
SELECT * FROM CADASTRAR_FORNECEDOR('Fornecedor C', 'Bairro B', '321', 'Rua Alternativa', '12345-678', 'Curitiba', '41123456789', '555.666.777-88', 'fornecedorC@example.com');
SELECT * FROM FORNECEDOR;
delete from fornecedor where id_fn = 16



/*-------------------------------
		TESTES
*/-------------------------------
--FUNÇÃO GENÉRICA PARA CADASTRAR

CREATE OR REPLACE FUNCTION cadastrar(tabela_name TEXT, variadic valores TEXT[])
RETURNS VOID AS $$
DECLARE
colunas TEXT;
BEGIN
EXECUTE format('INSERT INTO %I VALUES (%s)',
               tabela_name,
               array_to_string(valores, ', ')
        );
END;
$$ LANGUAGE plpgsql;

select * from cliente
SELECT cadastrar('CLIENTE', 'Maria', '545.718.790-08', 'Centro', '456', 'Rua Principal', '54321-098', 'São Paulo', 'maria@example.com', '86995002359');


/*---------------------------------------
	TRIGGER VALIDAR CADASTRO DO CLIENTE
*/---------------------------------------




CREATE OR REPLACE FUNCTION realizar_compra(
    cod_compra BIGINT,
    nome_fornecedor VARCHAR(255),
    nome_produto VARCHAR(255),
    quantidade BIGINT,
    preco_unitario DOUBLE PRECISION
) RETURNS VOID AS $$
DECLARE
    cod_forn BIGINT;
    cod_emp BIGINT;
    cod_prod BIGINT;
    cod_estoque BIGINT;
    cpf_cnpj_forn VARCHAR(18);
BEGIN
    -- Obter o ID do fornecedor com base no nome
    SELECT id, cpf_cnpj INTO cod_forn, cpf_cnpj_forn FROM fornecedor WHERE nome = nome_fornecedor;

    -- Obter o ID da empresa com base no current user
    SELECT id INTO cod_emp FROM empresa WHERE nome = current_user;

    -- Verificar se o fornecedor é válido para a empresa
    IF NOT verificar_fornecedor_empresa(cpf_cnpj_forn, cod_emp) THEN
        RAISE EXCEPTION 'Fornecedor não cadastrado para a empresa!';
    END IF;

    -- Verificar se o produto já existe
    IF NOT produto_existe(nome_produto) THEN
        INSERT INTO produto (nome) VALUES (nome_produto);
    END IF;

    -- Obter o ID do produto
    SELECT id INTO cod_prod FROM produto WHERE nome = nome_produto;

    -- Verificar se o produto já está cadastrado na empresa
    SELECT id INTO cod_estoque FROM estoque WHERE emp_id = cod_emp AND prod_id = cod_prod;
    
    IF NOT FOUND THEN
        -- Produto não está cadastrado na empresa, inserir no estoque
        INSERT INTO estoque (emp_id, prod_id, preco_prod, quant_estoque)
        VALUES (cod_emp, cod_prod, preco_unitario, quantidade)
        RETURNING id INTO cod_estoque;
    ELSE
        -- Produto já está cadastrado, atualizar o estoque
        UPDATE estoque SET quant_estoque = quant_estoque + quantidade WHERE id = cod_estoque;
    END IF;

    -- Verificar se a compra já existe
    IF NOT compra_existe(cod_compra) THEN
        -- Criar nova compra
        INSERT INTO compra (id, fornecedor_id, dt_compra, valor_total)
        VALUES (cod_compra, cod_forn, CURRENT_TIMESTAMP, quantidade * preco_unitario);
    ELSE
        -- Atualizar compra existente
        UPDATE compra SET valor_total = valor_total + (quantidade * preco_unitario)
        WHERE id = cod_compra;
    END IF;

    -- Verificar se o item da compra já existe
    IF item_compra_existe(cod_compra, cod_estoque) THEN
        UPDATE item_compra SET qtd_comprada = qtd_comprada + quantidade,
                               valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
        WHERE compra_id = cod_compra AND estoque_id = cod_estoque;
    ELSE
        INSERT INTO item_compra (compra_id, estoque_id, qtd_comprada, valor_total_item_c, preco_unitario)
        VALUES (cod_compra, cod_estoque, quantidade, quantidade * preco_unitario, preco_unitario);
    END IF;

END;
$$ LANGUAGE plpgsql;


SELECT 
    table_name, 
    column_name, 
    data_type, 
    is_nullable
FROM 
    information_schema.columns
WHERE 
    table_name IN ('fornecedor','cliente', 'endereco','usuario', 'venda' ,'empresa', 'produto', 'estoque', 'compra', 'item_compra', 'item_venda')
   order by table_name asc;
 


  cod_compra INT,
    nome_fornecedor VARCHAR(40),
    nome_produto VARCHAR(25),
    quantidade INT,
    preco_unitario FLOAT


select * from fornecedor f ;
select * from produto p ;
select * from estoque e ;
select * from compra c ;
SELECT realizar_compra(4, 'Distribuidora XYZ', 'Estetoscópio', 5, 199.99);








