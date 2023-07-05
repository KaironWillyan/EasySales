package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.EmpresaRepository;
import com.easysales.entities.Empresa;

@Service
public class EmpresaService {
     @Autowired
    private EmpresaRepository empresaRepository;

    public List<Empresa> getAllEmpresas() {
        return empresaRepository.findAll();
    }

    public Empresa getEmpresaById(Integer id) {
        return empresaRepository.findById(id).orElse(null);
    }

    public Empresa createEmpresa(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    public Empresa updateEmpresa(Integer id, Empresa empresa) {
        if (empresaRepository.existsById(id)) {
            empresa.setIdEmp(id);
            return empresaRepository.save(empresa);
        }
        return null;
    }

    public void deleteEmpresa(Integer id) {
        empresaRepository.deleteById(id);
    }
}
