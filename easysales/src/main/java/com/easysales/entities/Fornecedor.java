package com.easysales.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Fornecedor {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idFornecedor;

    @Column(nullable = false)
    private String nomeFornecedor;

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

    @OneToMany(mappedBy = "compras")
    private List<Compra> compras;
}
