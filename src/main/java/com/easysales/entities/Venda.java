package com.easysales.entities;

import java.security.Timestamp;
import java.util.List;
import java.lang.Integer;

import com.fasterxml.jackson.annotation.JsonFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class Venda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "venda")
    private List<ItemVenda> itemVenda;

     @ManyToOne
    @JoinColumn(name = "idCli", referencedColumnName = "id", nullable = false)
    private Cliente cliente;
    
    @Column(name = "valorTotalVenda", nullable = false)
    private float valorTotalVenda;
    
    @Column(name = "dtVenda", nullable = false)
    private Timestamp dtVenda;
    
    @Column(name = "qtdItens", nullable = false)
    private int qtdItens;
    
    @Column(name = "qtdParcelasTotal", nullable = false)
    private int qtdParcelasTotal;
    
    @Column(name = "qtdParcelasFalta")
    private Integer qtdParcelasFalta;

}
   