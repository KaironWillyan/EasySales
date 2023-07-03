package com.easysales.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.lang.Integer;

@Entity
@NoArgsConstructor
@Data
public class Empresa    {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idEmp;
    
    @Column(name = "nomeEmp", nullable = false)
    private String nomeEmp;
    
    @Column(name = "emailEmp", nullable = false)
    private String emailEmp;
    
    @Column(name = "senhaEmp", nullable = false)
    private String senhaEmp;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @OneToMany(mappedBy = "empresa")
    private List<Estoque> estoques;
}
