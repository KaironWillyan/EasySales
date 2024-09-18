
------------------------------FUNÇÃO SE cliente EXISTE NA EMPRESA-----------------------------------------

CREATE OR REPLACE FUNCTION VERIFICAR_cliente_EMPRESA(cpf_cnpj_cli VARCHAR(18), empresa_id INT)
RETURNS BOOLEAN AS
$$
DECLARE
cliente_pertence_empresa BOOLEAN;
BEGIN
SELECT EXISTS (
    SELECT 1
    FROM cliente WHERE empresa_id = EMPRESA_ID AND
        cpf_cnpj = cpf_cnpj_cli
)INTO cliente_pertence_empresa;

RETURN cliente_pertence_empresa;
END;
$$
LANGUAGE 'plpgsql';