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
    private Long id;
    
    @Column(name = "nome", nullable = false)
    private String nome;
    
    @Column(name = "telefone", nullable = false)
    private String telefone;
    
    @Column(name = "cpf_cnpj", nullable = false)
    private String cpf_cnpj;
    
    @Column(name = "email", nullable = false)
    private String email;

    @OneToOne(cascade = CascadeType.ALL)
    private Endereco endereco;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "fornecedor")
    private List<Compra> compras;
}
