package com.easysales.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class ItemVenda {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String itemVendaId;

    @OneToMany(mappedBy = "estoque")
    private List<Estoque> estoque;

    @ManyToOne
    @JoinColumn(name = "vendaId", nullable = false)
    private Venda venda;

    @Column()
    private Float precoItemVenda;

    @Column()
    private Float valorTotalItemVenda;
}
