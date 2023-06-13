package com.easysales.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
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
