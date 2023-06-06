package com.easysales.entities;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idProd;

    @Column(nullable = false)
    private String nome_prod;

    @OneToMany(mappedBy = "estoque")
    private List<Estoque> estoques;
}
