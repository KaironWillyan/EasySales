package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @Builder
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nomeEmp", nullable = false)
    private String nome;

    @Column(name = "emailEmp", nullable = false, unique = true)
    private String email;

    @Column(name = "senhaEmp", nullable = false)
    private String senha;

    @Column(nullable = false, unique = true)
    private String cpf;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String num;

    @Column(nullable = false)
    private String logradouro;

    @Column(nullable = false)
    private String cep;

    @Column(nullable = false)
    private String cidade;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "usuario")
    private List<Empresa> empresas;
}
