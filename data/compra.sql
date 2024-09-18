

--------------------------------DELETAR COMPRA COM O FORNECEDOR------------------------------

CREATE OR REPLACE FUNCTION apagar_compra(cod_compra INT)
RETURNS VOID AS $$
	DECLARE
	cod_estoque INT;
	    item_rec RECORD;
	BEGIN
		    -- Percorrer os itens da compra
		FOR item_rec IN SELECT estoqueId, qtd_compra FROM ItemCompra WHERE compraId = cod_compra LOOP
		        cod_estoque := item_rec.estoqueId;
		
		-- Atualizar a quantidade no estoque
		UPDATE Estoque SET quant_estq = quant_estq - item_rec.qtd_compra WHERE id_estoque = cod_estoque;
		
		-- Remover o item da compra
		DELETE FROM ItemCompra WHERE compraId = cod_compra AND estoqueId = cod_estoque;
		END LOOP;
		
		    -- Remover a compra (Compra)
		DELETE FROM Compra WHERE id_compra = cod_compra;
		
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
		SELECT id_estoque INTO cod_estoque
		FROM Estoque
		WHERE prodId = (SELECT id_prod FROM Produto WHERE nome_prod = nome_produto);
		
		-- Obter a quantidade deletada do item
		SELECT qtdComprada INTO qtd_deletada
		FROM ItemCompra
		WHERE compraId = cod_compra AND estoqueId = cod_estoque;
		
		-- Deletar o item da compra
		DELETE FROM ItemCompra WHERE compraId = cod_compra AND estoqueId = cod_estoque;
		
		-- Atualizar a quantidade no estoque
		UPDATE Estoque SET quant_estq = quant_estq + qtd_deletada WHERE id_estoque = cod_estoque;
	END;
$$ LANGUAGE plpgsql;



----------------------------UPDATE QUANTIDADE ITENS_COMPRA (A EMPRESA PODE QUERER DEVOLVER ITENS)------------------

CREATE OR REPLACE FUNCTION update_quantidade_itens_compra(cod_compra INT, nome_produto VARCHAR, quantidade_devolvida INT)
RETURNS VOID AS $$
	DECLARE
	cod_estoque INT;
	BEGIN
	    -- Obter o ID do estoque do produto na compra
		SELECT ItemCompra.estoqueId
		INTO cod_estoque
		FROM ItemCompra
		         INNER JOIN Compra ON ItemCompra.compraId = Compra.id_compra
		         INNER JOIN Estoque ON ItemCompra.estoqueId = Estoque.id_estoque
		         INNER JOIN Produto ON Estoque.prodId = Produto.id_prod
		WHERE Compra.id_compra = cod_compra
		  AND Produto.nome_prod = nome_produto;
		
		-- Atualizar a quantidade comprada e o valor total do item
		UPDATE ItemCompra
		SET qtd_compra = qtd_compra - quantidade_devolvida,
		    valor_total_item_c = (qtd_compra - quantidade_devolvida) * (valor_total_item_c / qtd_compra)
		WHERE compraId = cod_compra
		  AND estoqueId = cod_estoque;
		
		-- Atualizar a quantidade devolvida no estoque
		UPDATE Estoque
		SET quant_estq = quant_estq + quantidade_devolvida
		WHERE id_estoque = cod_estoque;
		
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
SELECT EXISTS (SELECT 1 FROM ITEMCOMPRA WHERE COMPRAID = CC AND ESTOQUEID = CE) INTO EXISTE;
RETURN EXISTE;
END;
$$ LANGUAGE PLPGSQL;


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
		SELECT id_fn INTO COD_FORN FROM Fornecedor WHERE nome = nome_fornecedor;
		-- Obter o ID da empresa com base no current user
		SELECT id_emp INTO COD_EMP FROM Empresa WHERE nome = current_user;
		SELECT CPF_FN INTO CPF_FORN FROM FORNECEDOR WHERE nome = NOME_FORNECEDOR;
		SELECT id_prod INTO COD_PROD FROM Produto WHERE nome = nome_produto;
		SELECT id_estoque INTO COD_ESTOQUE FROM Estoque WHERE empId = COD_EMP AND prodId = COD_PROD;
		
		IF VERIFICAR_FORNECEDOR_EMPRESA(CPF_FORN, COD_EMP) THEN
				IF PRODUTO_EXISTE(nome_produto) THEN
					IF PRODUTO_EXISTE_NA_EMPRESA(COD_PROD, COD_EMP) THEN -- SE O PRODUTO JÁ EXISTE, A EMPRESA SÓ ESTÁ REPONDO
						IF COMPRA_EXISTE(cod_compra) THEN
		UPDATE Compra SET valor_total_compra = valor_total_compra + (quantidade * preco_unitario)
		WHERE id_compra = cod_compra;
		IF ITEM_COMPRA_EXISTE(cod_compra, COD_ESTOQUE) THEN
		UPDATE ItemCompra SET qtdComprada = qtdComprada + quantidade,
		                      valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
		WHERE compraId = cod_compra AND estoqueId = COD_ESTOQUE;
		ELSE
								INSERT INTO ItemCompra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		END IF;
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE empId = COD_EMP AND prodId = COD_PROD;
		ELSE
							INSERT INTO Compra VALUES(cod_compra, COD_FORN, CURRENT_TIMESTAMP, quantidade * preco_unitario);
		INSERT INTO ItemCompra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE empId = COD_EMP AND prodId = COD_PROD;
		END IF;
		ELSE -- SE O PRODUTO NÃO EXISTE NA EMPRESA
						INSERT INTO Produto (nome_prod) VALUES (nome_produto);
		SELECT id_prod INTO COD_PROD FROM Produto WHERE nome_prod = nome_produto;
		INSERT INTO Estoque VALUES (DEFAULT, COD_EMP, COD_PROD, preco_unitario, quantidade); -- CADASTRANDO PRODUTO NA EMPRESA
		SELECT id_estoque INTO COD_ESTOQUE FROM Estoque WHERE empId = COD_EMP AND prodId = COD_PROD;
		
		IF COMPRA_EXISTE(cod_compra) THEN
		UPDATE Compra SET valor_total_compra = valor_total_compra + (quantidade * preco_unitario)
		WHERE id_compra = cod_compra;
		IF ITEM_COMPRA_EXISTE(cod_compra, COD_ESTOQUE) THEN
		UPDATE ItemCompra SET qtdComprada = qtdComprada + quantidade,
		                      valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
		WHERE compraId = cod_compra AND estoqueId = COD_ESTOQUE;
		ELSE
								INSERT INTO ItemCompra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		END IF;
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE empId = COD_EMP AND prodId = COD_PROD;
		ELSE
							INSERT INTO Compra VALUES(cod_compra, COD_FORN, CURRENT_TIMESTAMP, quantidade * preco_unitario);
		INSERT INTO ItemCompra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE empId = COD_EMP AND prodId = COD_PROD;
		END IF;
		END IF;
		ELSE -- SE O PRODUTO NÃO EXISTE NA TABELA PRODUTO
					INSERT INTO Produto (nome_prod) VALUES (nome_produto);
		SELECT id_prod INTO COD_PROD FROM Produto WHERE nome_prod = nome_produto;
		INSERT INTO Estoque VALUES (DEFAULT, COD_EMP, COD_PROD, preco_unitario, quantidade); -- CADASTRANDO PRODUTO NA EMPRESA
		SELECT id_estoque INTO COD_ESTOQUE FROM Estoque WHERE empId = COD_EMP AND prodId = COD_PROD;
		
		IF COMPRA_EXISTE(cod_compra) THEN
		UPDATE Compra SET valor_total_compra = valor_total_compra + (quantidade * preco_unitario)
		WHERE id_compra = cod_compra;
		IF ITEM_COMPRA_EXISTE(cod_compra, COD_ESTOQUE) THEN
		UPDATE ItemCompra SET qtdComprada = qtdComprada + quantidade,
		                      valor_total_item_c = valor_total_item_c + (quantidade * preco_unitario)
		WHERE compraId = cod_compra AND estoqueId = COD_ESTOQUE;
		ELSE
							INSERT INTO ItemCompra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		END IF;
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE empId = COD_EMP AND prodId = COD_PROD;
		ELSE
						INSERT INTO Compra VALUES(cod_compra, COD_FORN, CURRENT_TIMESTAMP, quantidade * preco_unitario);
		INSERT INTO ItemCompra VALUES(cod_compra, COD_ESTOQUE, quantidade, quantidade * preco_unitario, preco_unitario);
		UPDATE Estoque SET quant_estq = quant_estq + quantidade WHERE empId = COD_EMP AND prodId = COD_PROD;
		END IF;
		END IF;
		else
				RAISE EXCEPTION 'FORNECEDOR NÃO CADASTRADO!';
		END IF;
		END;
		$$ LANGUAGE plpgsql;

