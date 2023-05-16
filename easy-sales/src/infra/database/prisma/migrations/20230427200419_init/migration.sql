-- CreateTable
CREATE TABLE "Cliente" (
    "id_cli" TEXT NOT NULL,
    "nome_cli" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rua_cli" TEXT NOT NULL,
    "bairro_cli" TEXT NOT NULL,
    "num_cli" TEXT NOT NULL,
    "logradouro_cli" TEXT NOT NULL,
    "cep_cli" TEXT NOT NULL,
    "cidade_cli" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cli")
);

-- CreateTable
CREATE TABLE "ItemCompra" (
    "compraId" TEXT NOT NULL,
    "estoqueId" TEXT NOT NULL,
    "qtdComprada" INTEGER NOT NULL,
    "valor_unitario_compra" DOUBLE PRECISION NOT NULL,
    "dt_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemCompra_pkey" PRIMARY KEY ("compraId","estoqueId")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id_compra" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,
    "valor_total_compra" DOUBLE PRECISION NOT NULL,
    "fornecedorId" TEXT NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id_compra")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id_fornecedor" TEXT NOT NULL,
    "nome_fornecedor" TEXT NOT NULL,
    "rua_fornecedor" TEXT NOT NULL,
    "bairro_fornecedor" TEXT NOT NULL,
    "num_fornecedor" TEXT NOT NULL,
    "logradouro_fornecedor" TEXT NOT NULL,
    "cep_fornecedor" TEXT NOT NULL,
    "cidade_fornecedor" TEXT NOT NULL,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("id_fornecedor")
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "estoqueId" TEXT NOT NULL,
    "vendaId" TEXT NOT NULL,
    "valor_prod" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemVenda_pkey" PRIMARY KEY ("estoqueId","vendaId")
);

-- CreateTable
CREATE TABLE "Venda" (
    "id_venda" TEXT NOT NULL,
    "cli_venda_id" TEXT NOT NULL,
    "valor_total_venda" DOUBLE PRECISION NOT NULL,
    "dt_pagamento" TIMESTAMP(3) NOT NULL,
    "quantidade_parcelas" INTEGER NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("id_venda")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id_empresa" TEXT NOT NULL,
    "nome_empresa" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id_empresa")
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id_estoque" TEXT NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id_estoque")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_prod" TEXT NOT NULL,
    "nome_prod" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id_prod")
);

-- CreateTable
CREATE TABLE "_EmpresaToEstoque" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EstoqueToProduto" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_cli_key" ON "Cliente"("id_cli");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_id_compra_key" ON "Compra"("id_compra");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_id_fornecedor_key" ON "Fornecedor"("id_fornecedor");

-- CreateIndex
CREATE UNIQUE INDEX "Venda_id_venda_key" ON "Venda"("id_venda");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_id_empresa_key" ON "Empresa"("id_empresa");

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_email_key" ON "Empresa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Estoque_id_estoque_key" ON "Estoque"("id_estoque");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_prod_key" ON "Produto"("id_prod");

-- CreateIndex
CREATE UNIQUE INDEX "_EmpresaToEstoque_AB_unique" ON "_EmpresaToEstoque"("A", "B");

-- CreateIndex
CREATE INDEX "_EmpresaToEstoque_B_index" ON "_EmpresaToEstoque"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EstoqueToProduto_AB_unique" ON "_EstoqueToProduto"("A", "B");

-- CreateIndex
CREATE INDEX "_EstoqueToProduto_B_index" ON "_EstoqueToProduto"("B");

-- AddForeignKey
ALTER TABLE "ItemCompra" ADD CONSTRAINT "ItemCompra_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra"("id_compra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCompra" ADD CONSTRAINT "ItemCompra_estoqueId_fkey" FOREIGN KEY ("estoqueId") REFERENCES "Estoque"("id_estoque") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor"("id_fornecedor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_estoqueId_fkey" FOREIGN KEY ("estoqueId") REFERENCES "Estoque"("id_estoque") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_vendaId_fkey" FOREIGN KEY ("vendaId") REFERENCES "Venda"("id_venda") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_cli_venda_id_fkey" FOREIGN KEY ("cli_venda_id") REFERENCES "Cliente"("id_cli") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmpresaToEstoque" ADD CONSTRAINT "_EmpresaToEstoque_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa"("id_empresa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmpresaToEstoque" ADD CONSTRAINT "_EmpresaToEstoque_B_fkey" FOREIGN KEY ("B") REFERENCES "Estoque"("id_estoque") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstoqueToProduto" ADD CONSTRAINT "_EstoqueToProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Estoque"("id_estoque") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EstoqueToProduto" ADD CONSTRAINT "_EstoqueToProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("id_prod") ON DELETE CASCADE ON UPDATE CASCADE;
