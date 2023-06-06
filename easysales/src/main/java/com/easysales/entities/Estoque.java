package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idEstoque;

    @ManyToMany
    private List<ItemVenda> item_venda;

    @ManyToOne
    @JoinColumn(name = "itemCompraId", nullable = false)
    private ItemCompra itemCompra;

    @ManyToOne
    @JoinColumn(name = "empresaId", nullable = false)
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "produtoId", nullable = false)
    private Produto produto;

    @Column(nullable = false)
    private Float valorVenda;
}
