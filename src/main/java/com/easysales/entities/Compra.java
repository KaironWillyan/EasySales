package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Timestamp;
import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "compra")
    private List<ItemCompra> item;

    @ManyToOne
    @JoinColumn(name = "fornecedor_id")
    private Fornecedor fornecedor;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Timestamp dt;

    @Column(nullable = false)
    private Float valorTotal;
}