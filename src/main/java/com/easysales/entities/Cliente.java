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
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String cpf_cnpj;

    @Column(name = "email", nullable = false)
    private String email;
    
    @Column(name = "telefone", nullable = false)
    private String telefone;

    @OneToOne(cascade = CascadeType.ALL)
    private Endereco endereco;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "cliente")
    private List<Venda> vendas;
}
