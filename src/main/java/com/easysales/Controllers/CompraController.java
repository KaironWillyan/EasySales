package com.easysales.Controllers;


import com.easysales.Service.CompraService;
import com.easysales.entities.Compra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class CompraController {

    @Autowired
    private CompraService compraService;

    @GetMapping("/compra")
    public List<Compra> getCompra(){
        return compraService.getAllCompras();
    }

    @GetMapping("/compra/{id}")
    public ResponseEntity<Compra> GetCompraById(@PathVariable(value = "idCompra") Long id){
        Compra compra = compraService.getCompraById(id);
        if(compra != null){
            return new ResponseEntity<Compra>(compra, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Compra não encontrado."
        );
    }

    @PostMapping("/compra")
    public Compra PostCompra(@Validated @RequestBody Compra compra){
        return compraService.createCompra(compra);
    }

    @PutMapping("/compra/{id}")
    public ResponseEntity<Compra> PutCompra(@PathVariable(value = "idCompra") Long id, @Validated @RequestBody Compra newCompra)
    {
        Compra updatedCompra = compraService.updateCompra(id, newCompra);
        if(updatedCompra != null){
            return new ResponseEntity<Compra>(updatedCompra, HttpStatus.OK);
        }
        
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "compra não encontrado."
        );
    }

    @DeleteMapping("/compra/{id}")
    public ResponseEntity<Compra> DeleteCompra(@PathVariable(value = "idCompra") Long id){

        compraService.deleteCompra(id);
        
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "compra não encontrado."
        );
    } 
}
