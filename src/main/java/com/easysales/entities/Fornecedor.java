package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class Fornecedor {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "nome", nullable = false)
    private String nome;
    
    @Column(name = "bairro", nullable = false)
    private String bairro;
    
    @Column(name = "num", nullable = false)
    private String num;
    
    @Column(name = "logradouro", nullable = false)
    private String logradouro;
    
    @Column(name = "cep", nullable = false)
    private String cep;
    
    @Column(name = "cidade", nullable = false)
    private String cidade;
    
    @Column(name = "telefone", nullable = false)
    private String telefone;
    
    @Column(name = "cpf", nullable = false)
    private String cpf;
    
    @Column(name = "email", nullable = false)
    private String email;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "fornecedor")
    private List<Compra> compras;
}
