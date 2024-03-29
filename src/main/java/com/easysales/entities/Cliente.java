        package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nome;

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

    @Column(name = "email", nullable = false)
    private String email;
    
    @Column(name = "telefone", nullable = false)
    private String telefone;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "cliente")
    private List<Venda> vendas;
}
