package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class ItemCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer itemCompraId;

    @ManyToOne
    @JoinColumn(name = "compra_id")
    private Compra compra;

    @ManyToOne
    @JoinColumn(name = "estoque_id", nullable = false)
    private Estoque estoque;

    @Column(nullable = false)
    private Integer qtdComprada;

    @Column(nullable = false)
    private Float valorUnitCompra;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Timestamp dtCompra;

}