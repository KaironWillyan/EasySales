package com.easysales.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idProd;

    @Column(nullable = false)
    private String nome_prod;

    @OneToMany(mappedBy = "estoque")
    private List<Estoque> estoques;
}
