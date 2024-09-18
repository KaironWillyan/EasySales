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
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "estoque")
    private List<ItemVenda> itemVenda;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "estoque")
    private List<ItemCompra> itemCompra;

    @ManyToOne
    @JoinColumn(name = "empId", referencedColumnName = "id", nullable = false)
    private Empresa empresa;
    
    @ManyToOne
    @JoinColumn(name = "prodId", referencedColumnName = "id", nullable = false)
    private Produto produto;
    
    @Column(name = "precoProd", nullable = false)
    private Double precoProd;
    
    @Column(name = "quantEstoque", nullable = false)
    private Long quantidade;
}
