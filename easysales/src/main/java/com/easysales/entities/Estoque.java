package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idEstoque;

    @OneToMany(mappedBy = "estoque")
    private List<ItemVenda> itemVenda;

    @OneToMany(mappedBy = "estoque")
    private List<ItemCompra> itemCompra;

    @ManyToOne
    @JoinColumn(name = "estoque_id", nullable = false)
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name = "produto_id", nullable = false)
    private Produto produto;

    @Column(nullable = false)
    private Float valorVenda;
}
