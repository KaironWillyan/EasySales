package com.easysales.Controllers;

import com.easysales.Service.EstoqueService;
import com.easysales.entities.Estoque;
import com.easysales.entities.Estoque;
import com.easysales.entities.Estoque;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@RestController
public class EstoqueController {
    @Autowired
    private EstoqueService estoqueService;

    @GetMapping("/estoque")
    public List<Estoque> getEstoque(){
        return estoqueService.getAllEstoques();
    }

    @GetMapping("/estoque/{id}")
    public ResponseEntity<Estoque> GetEstoqueById(@PathVariable(value = "idEstoque") Integer id){
        Estoque estoque = estoqueService.getEstoqueById(id);
        if(estoque != null){
            return new ResponseEntity<Estoque>(estoque, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Estoque não encontrado."
        );
    };
    @PostMapping("/estoque")
    public Estoque PostEstoque(@Validated @RequestBody Estoque estoque){
        return estoqueService.createEstoque(estoque);
    }

    @PutMapping("/estoque/{id}")
    public ResponseEntity<Estoque> PutEstoque(@PathVariable(value = "idEstoque") Integer id, @Validated @RequestBody Estoque newEstoque)
    {
        Estoque updatedEstoque = estoqueService.updateEstoque(id, newEstoque);
        if(updatedEstoque != null){
           
            return new ResponseEntity<Estoque>(updatedEstoque, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "estoque não encontrado."
        );
    }

    @DeleteMapping("/estoque/{id}")
    public ResponseEntity<Estoque> DeleteEstoque(@PathVariable(value = "idEstoque") Integer id){
        estoqueService.deleteEstoque(id);

        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "estoque não encontrado."
        );
    }

}
