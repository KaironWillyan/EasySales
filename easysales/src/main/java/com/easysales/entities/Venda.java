package com.easysales.entities;

import java.security.Timestamp;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

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
public class Venda {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idVenda;

    @OneToMany(mappedBy = "itemVenda")
    private List<ItemVenda> itemVenda;

    @ManyToOne()
    @JoinColumn(name="clienteId", nullable = false)
    private Cliente cliente;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Timestamp dtVenda;

    @Column(nullable = false)
    private Integer qtdItens;

    @Column(nullable = false)
    private Integer qtdParcelas;

    @Column(nullable = false)
    private Float valorTotalVenda;
}
