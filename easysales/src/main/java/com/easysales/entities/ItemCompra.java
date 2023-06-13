package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Entity
@NoArgsConstructor
@Data
public class ItemCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String itemCompraId;

    @ManyToOne()
    @JoinColumn(name = "compraId")
    private Compra compra;

    private String estoqueId;

    @Column(nullable = false)
    private Integer qtdComprada;

    @Column(nullable = false)
    private Float valorUnitCompra;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Timestamp dtCompra;

}