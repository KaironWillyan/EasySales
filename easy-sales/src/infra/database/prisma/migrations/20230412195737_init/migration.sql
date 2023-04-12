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
CREATE TABLE "Produto" (
    "id_prod" TEXT NOT NULL,
    "nome_prod" TEXT NOT NULL,
    "fornecedorId" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id_prod")
);

-- CreateTable
CREATE TABLE "ItemCompra" (
    "compraId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "qtdComprada" INTEGER NOT NULL,
    "valor_unitario_compra" DOUBLE PRECISION NOT NULL,
    "dt_compra" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemCompra_pkey" PRIMARY KEY ("compraId","produtoId")
);

-- CreateTable
CREATE TABLE "Compra" (
    "id_compra" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL,
    "valor_total_compra" DOUBLE PRECISION NOT NULL,

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
    "prodId" TEXT NOT NULL,
    "vendaId" TEXT NOT NULL,
    "valor_prod" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemVenda_pkey" PRIMARY KEY ("prodId","vendaId")
);

-- CreateTable
CREATE TABLE "Venda" (
    "id_venda" TEXT NOT NULL,
    "cli_venda_id" TEXT NOT NULL,
    "vendedorId" TEXT NOT NULL,
    "valor_total_venda" DOUBLE PRECISION NOT NULL,
    "dt_pagamento" TIMESTAMP(3) NOT NULL,
    "quantidade_parcelas" INTEGER NOT NULL,

    CONSTRAINT "Venda_pkey" PRIMARY KEY ("id_venda")
);

-- CreateTable
CREATE TABLE "Vendedor" (
    "id_vendedor" TEXT NOT NULL,
    "nome_vendedor" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Vendedor_pkey" PRIMARY KEY ("id_vendedor")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_cli_key" ON "Cliente"("id_cli");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_cpf_key" ON "Cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_id_prod_key" ON "Produto"("id_prod");

-- CreateIndex
CREATE UNIQUE INDEX "Compra_id_compra_key" ON "Compra"("id_compra");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_id_fornecedor_key" ON "Fornecedor"("id_fornecedor");

-- CreateIndex
CREATE UNIQUE INDEX "Venda_id_venda_key" ON "Venda"("id_venda");

-- CreateIndex
CREATE UNIQUE INDEX "Vendedor_id_vendedor_key" ON "Vendedor"("id_vendedor");

-- CreateIndex
CREATE UNIQUE INDEX "Vendedor_email_key" ON "Vendedor"("email");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Fornecedor"("id_fornecedor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCompra" ADD CONSTRAINT "ItemCompra_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra"("id_compra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCompra" ADD CONSTRAINT "ItemCompra_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id_prod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "Produto"("id_prod") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemVenda" ADD CONSTRAINT "ItemVenda_vendaId_fkey" FOREIGN KEY ("vendaId") REFERENCES "Venda"("id_venda") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_cli_venda_id_fkey" FOREIGN KEY ("cli_venda_id") REFERENCES "Cliente"("id_cli") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venda" ADD CONSTRAINT "Venda_vendedorId_fkey" FOREIGN KEY ("vendedorId") REFERENCES "Vendedor"("id_vendedor") ON DELETE RESTRICT ON UPDATE CASCADE;
