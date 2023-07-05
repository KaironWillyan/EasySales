package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Fornecedor {

   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idFn")
    private int idFn;
    
    @Column(name = "nomeFn", nullable = false)
    private String nomeFn;
    
    @Column(name = "bairroFn", nullable = false)
    private String bairroFn;
    
    @Column(name = "numFn", nullable = false)
    private String numFn;
    
    @Column(name = "logradouroFn", nullable = false)
    private String logradouroFn;
    
    @Column(name = "cepFn", nullable = false)
    private String cepFn;
    
    @Column(name = "cidadeFn", nullable = false)
    private String cidadeFn;
    
    @Column(name = "telefoneFn", nullable = false)
    private String telefoneFn;
    
    @Column(name = "cpfFn", nullable = false)
    private String cpfFn;
    
    @Column(name = "emailFn", nullable = false)
    private String emailFn;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "fornecedor")
    private List<Compra> compras;
}
