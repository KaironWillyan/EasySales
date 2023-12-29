package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idEstoque;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "estoque")
    private List<ItemVenda> itemVenda;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "estoque")
    private List<ItemCompra> itemCompra;

    @ManyToOne
    @JoinColumn(name = "empId", referencedColumnName = "idEmp", nullable = false)
    private Empresa empresa;
    
    @ManyToOne
    @JoinColumn(name = "prodId", referencedColumnName = "idProd", nullable = false)
    private Produto produto;
    
    @Column(name = "precoProd", nullable = false)
    private float precoProd;
    
    @Column(name = "quantEstq", nullable = false)
    private int quantEstq;
}
