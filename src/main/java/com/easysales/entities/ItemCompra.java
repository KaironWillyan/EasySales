package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@Data
public class ItemCompra {
    @EmbeddedId
    private ItemCompraId id;

    @ManyToOne
    @MapsId("compraId")
    @JoinColumn(name = "compra_id")
    private Compra compra;

    @ManyToOne
    @MapsId("estoqueId")
    @JoinColumn(name = "estoque_id")
    private Estoque estoque;
    
    @Column(name = "qtdComprada", nullable = false)
    private int qtdComprada;
    
    @Column(name = "valorTotalItemC", nullable = false)
    private float valorTotalItemC;
    
    @Column(name = "precoProdC", nullable = false)
    private float precoProdC;
}