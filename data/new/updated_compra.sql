

--------------------------------DELETAR COMPRA COM O FORNECEDOR------------------------------

CREATE OR REPLACE FUNCTION apagar_compra(cod_compra INT)
RETURNS VOID AS $$
	DECLARE
	cod_estoque INT;
	    item_rec RECORD;
	BEGIN
		    -- Percorrer os itens da compra
		FOR item_rec IN SELECT estoque_id, qtd_compra FROM item_compra WHERE compra_id = cod_compra LOOP
		        cod_estoque := item_rec.estoque_id;
		
		-- Atualizar a quantidade no estoque
		UPDATE estoque SET quant_estq = quant_estq - item_rec.qtd_compra WHERE id = cod_estoque;
		
		-- Remover o item da compra
		DELETE FROM item_compra WHERE compra_id = cod_compra AND estoque_id = cod_estoque;
		END LOOP;
		
		    -- Remover a compra (Compra)
		DELETE FROM compra WHERE id = cod_compra;
		
		RAISE NOTICE 'Compra % apagada com sucesso!', cod_compra;
	END;
$$ LANGUAGE plpgsql;


----------------------------DELETAR ITEM DA COMPRA COM O FORNECEDOR------------------------------

CREATE OR REPLACE FUNCTION deletar_item_compra(cod_compra INT, nome_produto VARCHAR) RETURNS VOID AS $$
	DECLARE
	cod_estoque INT;
	    qtd_deletada INT;
	BEGIN
		    -- Obter o código do estoque com base no nome do produto
		SELECT id INTO cod_estoque
		FROM Estoque
		WHERE prod_id = (SELECT id FROM produto WHERE nome_prod = nome_produto);
		
		-- Obter a quantidade deletada do item
		SELECT qtd_comprada INTO qtd_deletada
		FROM item_compra
		WHERE compra_id = cod_compra AND estoque_id = cod_estoque;
		
		-- Deletar o item da compra
		DELETE FROM item_compra WHERE compra_id = cod_compra AND estoque_id = cod_estoque;
		
		-- Atualizar a quantidade no estoque
		UPDATE estoque SET quant_estq = quant_estq + qtd_deletada WHERE id = cod_estoque;
	END;
$$ LANGUAGE plpgsql;



----------------------------UPDATE QUANTIDADE ITENS_COMPRA (A EMPRESA PODE QUERER DEVOLVER ITENS)------------------


CREATE OR REPLACE FUNCTION update_quantidade_itens_compra(cod_compra INT, nome_produto VARCHAR, quantidade_devolvida INT)
RETURNS VOID AS $$
	DECLARE
	cod_estoque INT;
	begin 
	    -- Obter o ID do estoque do produto na compra
		SELECT item_compra.estoque_id
		INTO cod_estoque
		FROM item_compra
		         INNER JOIN compra ON item_compra.compra_id = compra.id
		         INNER JOIN estoque ON item_compra.estoque_id = estoque.id
		         INNER JOIN produto ON estoque.prod_id = produto.id
		WHERE compra.id = cod_compra
		  AND produto.nome_prod = nome_produto;
		
		-- Atualizar a quantidade comprada e o valor total do item
		UPDATE item_compra
		SET qtd_compra = qtd_compra - quantidade_devolvida,
		    valor_total_item_c = (qtd_compra - quantidade_devolvida) * (valor_total_item_c / qtd_compra)
		WHERE compra_id = cod_compra
		  AND estoque_id = cod_estoque;
		
		-- Atualizar a quantidade devolvida no estoque
		UPDATE estoque
		SET quant_estq = quant_estq + quantidade_devolvida
		WHERE id = cod_estoque;
		
		RAISE NOTICE '% unidades do item % devolvidas na compra %.', quantidade_devolvida, nome_produto, cod_compra;
	END;
$$ LANGUAGE plpgsql;



-------------------------SE A COMPRA JA EXISTE----------------------------------
CREATE OR REPLACE FUNCTION COMPRA_EXISTE(CC INT)
RETURNS BOOLEAN
AS $$
DECLARE
EXISTE BOOLEAN;
BEGIN
SELECT EXISTS (SELECT 1 FROM COMPRA WHERE ID_COMPRA = CC) INTO EXISTE;
RETURN EXISTE;
END;
$$ LANGUAGE PLPGSQL;


-------------------------SE O ITEM_COMPRA JA EXISTE----------------------------------
CREATE OR REPLACE FUNCTION ITEM_COMPRA_EXISTE(CC INT, CE INT)
RETURNS BOOLEAN
AS $$
DECLARE
EXISTE BOOLEAN;
BEGIN
SELECT EXISTS (SELECT 1 FROM ITEMCOMPRA WHERE COMPRA_ID = CC AND ESTOQUE_ID = CE) INTO EXISTE;
RETURN EXISTE;
END;
$$ LANGUAGE PLPGSQL;

select * from item_compra ic ;

-----------------------FUNÇÃO DE REALIZAR COMPRA COM O FORNECEDOR--------------------------
		CREATE OR REPLACE FUNCTION realizar_compra(
			cod_compra INT,
		  	nome_fornecedor VARCHAR(40),
			nome_produto VARCHAR(25),
		    quantidade INT,
		    preco_unitario FLOAT
		) RETURNS VOID AS $$
		DECLARE
		COD_FORN INT;
		    COD_EMP INT;
		    COD_PROD INT;
		    COD_ESTOQUE INT;
			CPF_FORN VARCHAR(18);
		BEGIN
		    -- Obter o ID do fornecedor com base no nome
		SELECT id INTO COD_FORN FROM fornecedor WHERE nome = nome_fornecedor;
		-- Obter o ID da empresa com base no current user
		SELECT id INTO COD_EMP FROM empresa WHERE nome = current_user;
		SELECT CPF INTO CPF_FORN FROM fornecedor WHERE nome = NOME_FORNECEDOR;
		SELECT id INTO COD_PROD FROM produto WHERE nome = nome_produto;
		SELECT id INTO COD_ESTOQUE FROM estoque WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		
		IF VERIFICAR_FORNECEDOR_EMPRESA(CPF_FORN, COD_EMP) THEN
				IF PRODUTO_EXISTE(nome_produto) THEN
					IF PRODUTO_EXISTE_NA_EMPRESA(COD_PROD, COD_EMP) THEN -- SE O PRODUTO JÁ EXISTE, A EMPRESA SÓ ESTÁ REPONDO
						IF COMPRA_EXISTE(cod_compra) THEN
		UPDATE compra SET valor_total_compra = valor_total_compra + (quantidade * preco_unitario)
		WHERE id = cod_compra;
		IF ITEM_COMPRA_EXISTE(cod_compra, COD_ESTOQUE) THEN
		UPDATE item_compra SET qtd_comprada = qtd_comprada + quantidade,
		                      valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
		WHERE compra_id = cod_compra AND estoque_id = COD_ESTOQUE;
		ELSE
			INSERT INTO item_compra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		END IF;
		UPDATE estoque SET quant_estq = quant_estq + quantidade WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		ELSE
							INSERT INTO compra VALUES(cod_compra, COD_FORN, CURRENT_TIMESTAMP, quantidade * preco_unitario);
		INSERT INTO item_compra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		UPDATE estoque SET quant_estq = quant_estq + quantidade WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		END IF;
		ELSE -- SE O PRODUTO NÃO EXISTE NA EMPRESA
			INSERT INTO produto (nome_prod) VALUES (nome_produto);
		SELECT id INTO COD_PROD FROM produto WHERE nome_prod = nome_produto;
		INSERT INTO Estoque VALUES (DEFAULT, COD_EMP, COD_PROD, preco_unitario, quantidade); -- CADASTRANDO PRODUTO NA EMPRESA
		SELECT id INTO COD_ESTOQUE FROM estoque WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		
		IF COMPRA_EXISTE(cod_compra) THEN
		UPDATE compra SET valor_total_compra = valor_total_compra + (quantidade * preco_unitario)
		WHERE id = cod_compra;
		IF ITEM_COMPRA_EXISTE(cod_compra, COD_ESTOQUE) THEN
		UPDATE item_compra SET qtd_comprada = qtd_comprada + quantidade,
		                      valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
		WHERE compra_id = cod_compra AND estoque_id = COD_ESTOQUE;
		ELSE
			INSERT INTO item_compra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		END IF;
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		ELSE
			INSERT INTO compra VALUES(cod_compra, COD_FORN, CURRENT_TIMESTAMP, quantidade * preco_unitario);
		INSERT INTO item_compra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		UPDATE estoque SET quant_estq = quant_estq + quantidade WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		END IF;
		END IF;
		ELSE -- SE O PRODUTO NÃO EXISTE NA TABELA PRODUTO
			INSERT INTO produto (nome_prod) VALUES (nome_produto);
		SELECT id INTO COD_PROD FROM produto WHERE nome_prod = nome_produto;
		INSERT INTO estoque VALUES (DEFAULT, COD_EMP, COD_PROD, preco_unitario, quantidade); -- CADASTRANDO PRODUTO NA EMPRESA
		SELECT id_estoque INTO COD_ESTOQUE FROM Estoque WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		
		IF COMPRA_EXISTE(cod_compra) THEN
		UPDATE compra SET valor_total_compra = valor_total_compra + (quantidade * preco_unitario)
		WHERE id = cod_compra;
		IF ITEM_COMPRA_EXISTE(cod_compra, COD_ESTOQUE) THEN
		UPDATE item_compra SET qtdComprada = qtdComprada + quantidade,
		                      valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
		WHERE compra_id = cod_compra AND estoque_id = COD_ESTOQUE;
		ELSE
			INSERT INTO item_compra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		END IF;
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		ELSE
			INSERT INTO compra VALUES(cod_compra, COD_FORN, CURRENT_TIMESTAMP, quantidade * preco_unitario);
		INSERT INTO item_compra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		UPDATE estoque SET quant_estq = quant_estq + quantidade WHERE emp_id = COD_EMP AND prod_id = COD_PROD;
		END IF;
		END IF;
		else
			RAISE EXCEPTION 'FORNECEDOR NÃO CADASTRADO!';
		END IF;
		END;
		$$ LANGUAGE plpgsql;

