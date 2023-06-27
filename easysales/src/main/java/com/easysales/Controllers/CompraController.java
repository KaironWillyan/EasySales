package com.easysales.Controllers;


import com.easysales.Repositories.CompraRepository;
import com.easysales.entities.Compra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
public class CompraController {

    @Autowired
    private CompraRepository compraRepository;

    @GetMapping("/compra")
    public List<Compra> getCompra(){
        return compraRepository.findAll();
    }

    @GetMapping("/compra/{id}")
    public ResponseEntity<Compra> GetCompraById(@PathVariable(value = "idCompra") Integer id){
        Optional<Compra> compra = compraRepository.findById(id);
        if(compra.isPresent()){
            return new ResponseEntity<Compra>(compra.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Compra não encontrado."
        );
    }

    @PostMapping("/compra")
    public Compra PostCompra(@Validated @RequestBody Compra compra){
        return compraRepository.saveAndFlush(compra);
    }

    @PutMapping("/compra/{id}")
    public ResponseEntity<Compra> PutCompra(@PathVariable(value = "idCompra") Integer id, @Validated @RequestBody Compra newCompra)
    {
        Optional<Compra> oldCompra = compraRepository.findById(id);
        if(oldCompra.isPresent()){
            Compra compra = oldCompra.get();
            compra.setItemCompra(newCompra.getItemCompra());
            compra.setFornecedor(newCompra.getFornecedor());
            compra.setDataCompra(newCompra.getDataCompra());
            compra.setValorTotalCompra(newCompra.getValorTotalCompra());
            compraRepository.save(compra);
            return new ResponseEntity<Compra>(compra, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "compra não encontrado."
        );
    }

    @DeleteMapping("/compra/{id}")
    public ResponseEntity<Compra> DeleteCompra(@PathVariable(value = "idCompra") Integer id){
        Optional<Compra> compra = compraRepository.findById((id));
        if (compra.isPresent()){
            compraRepository.delete(compra.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "compra não encontrado."
        );
    }

    @DeleteMapping("/compra")
    public ResponseEntity<Compra> DeleteAllCompra(){
        compraRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
