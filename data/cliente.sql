
------------------------------FUNÇÃO SE CLIENTE EXISTE NA EMPRESA-----------------------------------------

CREATE OR REPLACE FUNCTION VERIFICAR_CLIENTE_EMPRESA(cpf_cli VARCHAR(18), empresa_id INT)
RETURNS BOOLEAN AS
$$
DECLARE
cliente_pertence_empresa BOOLEAN;
BEGIN
SELECT EXISTS (
    SELECT 1
    FROM CLIENTE WHERE ID_EMP = EMPRESA_ID AND
        cpf = cpf_cli
)INTO cliente_pertence_empresa;

RETURN cliente_pertence_empresa;
END;
$$
LANGUAGE 'plpgsql';


select * from cliente c ;

