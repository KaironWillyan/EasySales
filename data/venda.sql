
/*-----------------------------------------------------------
					ABATER VENDA
			CLIENTE PODE ABATER UMA OU MAIS PARCELAS
*/---------------------------------------------------------------

CREATE OR REPLACE FUNCTION ABATER_PARCELA(COD_VENDA INT, QUANT_ABATE INT)
RETURNS VOID AS $$
DECLARE
QUANT_FALTA INT; --QTD PARCELAS FALTANTES
	QUANT_TOTAL INT;
BEGIN
SELECT QTD_PARCELAS_FALTA INTO QUANT_FALTA FROM VENDA WHERE id_venda = COD_VENDA;
SELECT QTD_PARCELAS_TOTAL INTO QUANT_TOTAL FROM VENDA WHERE id_venda = COD_VENDA;

IF QUANT_ABATE <= QUANT_FALTA THEN
		IF QUANT_FALTA < QUANT_TOTAL THEN
UPDATE VENDA SET QTD_PARCELAS_FALTA = QTD_PARCELAS_FALTA - QUANT_ABATE;
ELSIF QUANT_FALTA = 0 THEN
			RAISE NOTICE 'COMPRA JÁ QUITADA';
		ELSIF QUANT_FALTA = QUANT_TOTAL THEN
UPDATE VENDA SET QTD_PARCELAS_FALTA = QTD_PARCELAS_FALTA - QUANT_ABATE; --CRIAR TRIGGER PARA NÃO DEIXAR ABATER A PONTO DE FICAR >0
END IF;
ELSE
		RAISE EXCEPTION 'VOCÊ NÃO PODE ABATER MAIS PARCELAS QUE O NECESSÁRIO!';
END IF;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM CLIENTE


-----------------------------------------REALIZAR VENDA-------------------------------------------------------

SELECT * FROM REALIZAR REALIZAR_VENDA(1, 'PRODUTO A', 'EMPRESA A', 'MARIA SANTOS', 5, 2)
SELECT * FROM EMPRESA
SELECT * FROM ESTOQUE
SELECT * FROM CLIENTE
SELECT * FROM VENDA


CREATE OR REPLACE FUNCTION REALIZAR_VENDA(CV INT, NP VARCHAR(25), CPF_CLI VARCHAR(15), QV INT, QUANT_PARC INT) RETURNS VOID AS $$
	DECLARE
	QUANT_EST INT;
	    COD_PROD INT;
	    COD_EMP INT;
	    COD_CLI INT;
	    VALOR_PROD REAL;
	    COD_EST INT;
	BEGIN
		SELECT ID_CLI INTO COD_CLI FROM CLIENTE WHERE CPF = CPF_CLI;
		SELECT ID_EMP INTO COD_EMP FROM EMPRESA WHERE NOME_EMP = CURRENT_USER;
		
		IF VERIFICAR_CLIENTE_EMPRESA(cpf_cli, COD_EMP) THEN
		
			SELECT ID_PROD INTO COD_PROD FROM PRODUTO WHERE NOME_PROD = NP;
			SELECT PRECO_PROD INTO VALOR_PROD FROM ESTOQUE WHERE PRODID = COD_PROD;
			SELECT ID_ESTOQUE INTO COD_EST FROM ESTOQUE WHERE EMPID = COD_EMP AND PRODID = COD_PROD;
			SELECT QUANT_ESTQ INTO QUANT_EST FROM ESTOQUE WHERE ID_ESTOQUE = COD_EST;
		
				IF QUANT_EST >= QV THEN
			        IF NOT EXISTS (SELECT * FROM VENDA WHERE ID_VENDA = CV) THEN
			            IF QUANT_PARC > 1 THEN
			                INSERT INTO VENDA VALUES(CV, COD_CLI, VALOR_PROD * QV, CURRENT_DATE, QV, QUANT_PARC, QUANT_PARC);
				ELSE
	                INSERT INTO VENDA VALUES(CV, COD_CLI, VALOR_PROD * QV, CURRENT_DATE, QV, QUANT_PARC);
				END IF;
			INSERT INTO ItemVenda VALUES(CV, COD_EST, QV, VALOR_PROD * QV);
			UPDATE ESTOQUE SET QUANT_ESTQ = QUANT_ESTQ - QV WHERE ID_ESTOQUE = COD_EST;
		ELSE
			UPDATE VENDA SET VALOR_TOTAL_VENDA = VALOR_TOTAL_VENDA + (VALOR_PROD * QV), QTD_ITENS = QTD_ITENS + QV
			WHERE ID_VENDA = CV;
		IF EXISTS (SELECT * FROM ItemVenda WHERE vendaId = CV AND estoqueId = COD_EST) THEN
			UPDATE ItemVenda SET qtd_vendida = qtd_vendida + QV, valor_total_item_v = valor_total_item_v + (VALOR_PROD * QV);
		ELSE
		    INSERT INTO ItemVenda VALUES(CV, COD_EST, QV, VALOR_PROD * QV);
		END IF;
		UPDATE ESTOQUE SET QUANT_ESTQ = QUANT_ESTQ - QV WHERE ID_ESTOQUE = COD_EST;
		END IF;
		END IF;
			RAISE NOTICE 'VENDA REALIZADA COM SUCESSO!';
		ELSE
			RAISE EXCEPTION 'O CLIENTE AINDA NÃO FOI CADASTRADO!';
		END IF;
	END;
$$ LANGUAGE 'plpgsql';



--------------------------------DELETAR VENDA PARA UM CLIENTE------------------------------

CREATE OR REPLACE FUNCTION apagar_venda(venda_id INT)
RETURNS VOID AS $$
DECLARE
cod_estoque INT;
    item_rec RECORD;
BEGIN
    -- Percorrer os itens da venda
FOR item_rec IN SELECT estoqueId, qtd_vendida FROM ItemVenda WHERE vendaId = venda_id LOOP
        cod_estoque := item_rec.estoqueId;

-- Atualizar a quantidade no estoque
UPDATE Estoque SET quant_estq = quant_estq + item_rec.qtd_vendida WHERE id_estoque = cod_estoque;

-- Remover o item da venda
DELETE FROM ItemVenda WHERE vendaId = venda_id AND estoqueId = cod_estoque;
END LOOP;

    -- Remover a venda (Venda)
DELETE FROM Venda WHERE id_venda = venda_id;

RAISE NOTICE 'Venda % apagada com sucesso!', venda_id;
END;
$$ LANGUAGE plpgsql;


---------------------------------DELETAR ITEM DA VENDA--------------------------------------

CREATE OR REPLACE FUNCTION remover_item_venda(id_venda INT, nome_produto VARCHAR)
RETURNS VOID AS $$
	DECLARE
	cod_estoque INT;
	    qtd_removida INT;
	BEGIN
	    -- Obter o código do estoque com base no nome do produto
		SELECT id_estoque INTO cod_estoque
		FROM Estoque
		WHERE prodId = (SELECT id_prod FROM Produto WHERE nome_prod = nome_produto);
		
		-- Obter a quantidade removida do item
		SELECT qtd_vendida INTO qtd_removida
		FROM ItemVenda
		WHERE vendaId = id_venda AND estoqueId = cod_estoque;
		
		-- Deletar o item da venda
		DELETE FROM ItemVenda WHERE vendaId = id_venda AND estoqueId = cod_estoque;
		
		-- Atualizar a quantidade no estoque
		UPDATE Estoque SET quant_estq = quant_estq + qtd_removida WHERE id_estoque = cod_estoque;
		
		RAISE NOTICE 'Item % removido da venda %.', nome_produto, id_venda;
	END;
$$ LANGUAGE plpgsql;



---------------------------UPDATE QUANTIDADE ITENS_VENDA (O CLIENTE PODE DEVOLVER ITENS)------------------------

CREATE OR REPLACE FUNCTION update_quantidade_itens_venda(cod_venda INT, cod_produto INT, quantidade_devolvida INT)
RETURNS VOID AS $$
	DECLARE
	COD_ESTOQUE INT;
	BEGIN
		SELECT ID_ESTOQUE INTO COD_ESTOQUE FROM ESTOQUE WHERE PRODID = COD_PRODUTO;
		
		-- Atualizar a quantidade vendida e o valor total do item na tabela ItemVenda
		UPDATE ItemVenda
		SET qtd_vendida = qtd_vendida - quantidade_devolvida,
		    valor_total_item_v = (qtd_vendida - quantidade_devolvida) * (valor_total_item_v / qtd_vendida)
		WHERE vendaId = cod_venda
		  AND estoqueId = cod_estoque;
		
		-- Atualizar a quantidade devolvida no estoque
		UPDATE Estoque
		SET quant_estq = quant_estq + quantidade_devolvida
		WHERE PRODID = COD_PRODUTO;
		
		-- Atualizar a quantidade devolvida na tabela Venda
		UPDATE Venda
		SET qtd_itens= qtd_itens - quantidade_devolvida,
		    valor_total_venda = (qtd_itens - quantidade_devolvida) * (valor_total_venda / qtd_itens)
		WHERE id_venda = cod_venda;
		
		RAISE NOTICE '% unidades do item % devolvidas na venda %.', quantidade_devolvida, cod_produto, cod_venda;
	END;
$$ LANGUAGE plpgsql;

