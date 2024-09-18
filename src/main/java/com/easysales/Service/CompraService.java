package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.CompraRepository;
import com.easysales.entities.Compra;

@Service
public class CompraService {
    @Autowired
    private CompraRepository compraRepository;

    public List<Compra> getAllCompras() {
        return compraRepository.findAll();
    }

    public Compra getCompraById(Long id) {
        return compraRepository.findById(id).orElse(null);
    }

    public Compra createCompra(Compra compra) {
        return compraRepository.save(compra);
    }

    public Compra updateCompra(Long id, Compra compra) {
        if (compraRepository.existsById(id)) {
            compra.setId(id);
            return compraRepository.save(compra);
        }
        return null;
    }

    public void deleteCompra(Long id) {
        compraRepository.deleteById(id);
    }
}
