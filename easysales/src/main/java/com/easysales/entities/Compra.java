package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idCompra;

    @OneToMany(mappedBy = "compra")
    private List<ItemCompra> itemCompra;

    @ManyToOne
    @JoinColumn(name = "fornecedor_id")
    private Fornecedor fornecedor;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Timestamp dataCompra;

    @Column(nullable = false)
    private Float valorTotalCompra;
}
