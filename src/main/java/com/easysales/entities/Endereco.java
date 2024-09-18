package com.easysales.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String num;

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String logradouro;

    @Column(nullable = false)
    private String cep;

    @Column(nullable = false)
    private String cidade;

    @Column()
    private String complemento;

    @OneToOne(mappedBy = "endereco")
    private Usuario usuario;

    @OneToOne(mappedBy = "endereco")
    private Fornecedor fornecedor;

    @OneToOne(mappedBy = "endereco")
    private Cliente cliente;

    @OneToOne(mappedBy = "endereco")
    private Empresa empresa;
}
