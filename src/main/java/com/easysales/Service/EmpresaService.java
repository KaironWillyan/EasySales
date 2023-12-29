package com.easysales.Service;

import java.util.List;

import com.easysales.Repositories.EstoqueRepository;
import com.easysales.entities.Estoque;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.EmpresaRepository;
import com.easysales.entities.Empresa;

@Service
public class EmpresaService {
    @Autowired
    private EmpresaRepository empresaRepository;
     @Autowired
     private EstoqueRepository estoqueRepository;

    public List<Empresa> getAllEmpresas() {
        return empresaRepository.findAll();
    }

    public Empresa getEmpresaById(Integer id) {
        return empresaRepository.findById(id).orElse(null);
    }

    public Empresa createEmpresa(Empresa empresa) {
        empresaRepository.save(empresa);
        Estoque estoque = Estoque.builder()
                .empresa(empresa)
                .build();
        return empresa;
    }

    public Empresa updateEmpresa(Integer id, Empresa empresa) {
        if (empresaRepository.existsById(id)) {
            empresa.setId(id);
            return empresaRepository.save(empresa);
        }
        return null;
    }

    public void deleteEmpresa(Integer id) {
        empresaRepository.deleteById(id);
    }
}
