package com.easysales.entities;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idProd;

    @Column(nullable = false)
    private String nomeProduto;

    @OneToMany(mappedBy = "produto")
    private List<Estoque> estoques;
}
