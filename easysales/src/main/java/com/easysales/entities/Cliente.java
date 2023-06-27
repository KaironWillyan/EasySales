package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idCli;

    @Column(nullable = false)
    private String nomeCli;

    @Column(nullable = false, unique = true)
    private String cpfCli;

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

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "cliente")
    private List<Venda> vendas;
}
