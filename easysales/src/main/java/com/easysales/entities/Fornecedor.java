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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idFornecedor;

    @Column(nullable = false)
    private String nomeFornecedor;

    @Column(nullable = false)
    private String cpfFornecedor;

    @Column(nullable = false)
    private String ruaFornecedor;

    @Column(nullable = false)
    private String bairroFornecedor;

    @Column(nullable = false)
    private String numFornecedor;

    @Column(nullable = false)
    private String logradouroFornecedor;

    @Column(nullable = false)
    private String cepFornecedor;

    @Column(nullable = false)
    private String cidadeFornecedor;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "fornecedor")
    private List<Compra> compras;
}
