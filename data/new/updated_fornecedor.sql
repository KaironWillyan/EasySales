
------------------------------FUNÇÃO SE FORNECEDOR EXISTE NA EMPRESA-----------------------------------------

CREATE OR REPLACE FUNCTION VERIFICAR_FORNECEDOR_EMPRESA(cpf_forn VARCHAR(18), empresa_id INT)
RETURNS BOOLEAN AS
$$
DECLARE
fornecedor_pertence_empresa BOOLEAN;
BEGIN
SELECT EXISTS (
    SELECT 1
    FROM fornecedor WHERE empresa_id = EMPRESA_ID AND
        cpf_cnpj = CPF_FORN
) INTO fornecedor_pertence_empresa;

RETURN fornecedor_pertence_empresa;
END;
$$
LANGUAGE 'plpgsql';