package com.easysales.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
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
