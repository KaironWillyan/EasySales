package com.easysales.entities;

import java.util.List;
import java.lang.Integer;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class ItemVenda {
    @EmbeddedId
    private ItemVendaId id;

    @ManyToOne
    @MapsId("vendaId")
    @JoinColumn(name = "venda_id")
    private Venda venda;

    @ManyToOne
    @MapsId("estoqueId")
    @JoinColumn(name = "estoque_id")
    private Estoque estoque;
    
    @Column(name = "qtdVendida", nullable = false)
    private int qtdVendida;
    
    @Column(name = "valorTotalItemV", nullable = false)
    private float valorTotalItemV;
}
