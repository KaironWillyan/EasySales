package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Empresa    {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idEmpresa;

    @Column(nullable = false)
    private String nomeEmpresa;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String senha;

    @OneToMany(mappedBy = "estoque", targetEntity = Estoque.class)
    private List<Estoque> estoques;
}
