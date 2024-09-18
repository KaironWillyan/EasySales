package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.FornecedorRepository;
import com.easysales.entities.Fornecedor;

@Service
public class FornecedorService {
    @Autowired
    private FornecedorRepository fornecedorRepository;

    public List<Fornecedor> getAllFornecedores() {
        return fornecedorRepository.findAll();
    }

    public Fornecedor getFornecedorById(Long id) {
        return fornecedorRepository.findById(id).orElse(null);
    }

    public Fornecedor createFornecedor(Fornecedor fornecedor) {
        return fornecedorRepository.save(fornecedor);
    }

    public Fornecedor updateFornecedor(Long id, Fornecedor fornecedor) {
        if (fornecedorRepository.existsById(id)) {
            fornecedor.setId(id);
            return fornecedorRepository.save(fornecedor);
        }
        return null;
    }

    public void deleteFornecedor(Long id) {
        fornecedorRepository.deleteById(id);
    }
}
