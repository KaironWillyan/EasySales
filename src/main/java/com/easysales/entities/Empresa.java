package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Empresa    {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "cpf_cnpj", nullable = false)
    private  String cnpj;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "empresa")
    private List<Estoque> estoques;

    @ManyToOne
    @JoinColumn(name = "usuarioId", referencedColumnName = "id", nullable = false)
    private Usuario usuario;
}
