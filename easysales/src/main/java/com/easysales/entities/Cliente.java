package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idCli;

    @Column(nullable = false)
    private String nomeCli;

    @Column(nullable = false, unique = true)
    private String cefCli;

    @Column(nullable = false)
    private String ruaCli;

    @Column(nullable = false)
    private String bairroCli;

    @Column(nullable = false)
    private String numCli;

    @Column(nullable = false)
    private String logradouroCli;

    @Column(nullable = false)
    private String cepCli;

    @Column(nullable = false)
    private String cidadeCli;

    @OneToMany(mappedBy = "vendas", targetEntity = Venda.class)
    private List<Venda> vendas;
}
