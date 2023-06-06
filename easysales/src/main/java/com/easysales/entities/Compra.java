package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idCompra;

    @OneToMany(mappedBy = "itemCompra")
    private List<ItemCompra> itemCompra;

    @ManyToOne()
    private List<Fornecedor> fornecedor;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private Timestamp dataCompra;

    @Column(nullable = false)
    private Float valorTotalCompra;
}