package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Empresa    {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idEmpresa;

    @Column(nullable = false)
    private String nomeEmpresa;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @OneToMany(mappedBy = "empresa")
    private List<Estoque> estoques;
}
