package com.easysales.Controllers;

import com.easysales.Repositories.EstoqueRepository;
import com.easysales.Repositories.EstoqueRepository;
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
    private EstoqueRepository estoqueRepository;;

    @GetMapping("/estoque")
    public List<Estoque> getEstoque(){
        return estoqueRepository.findAll();
    }

    @GetMapping("/estoque/{id}")
    public ResponseEntity<Estoque> GetEstoqueById(@PathVariable(value = "idEstoque") Integer id){
        Optional<Estoque> estoque = estoqueRepository.findById(id);
        if(estoque.isPresent()){
            return new ResponseEntity<Estoque>(estoque.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Estoque não encontrado."
        );
    };
    @PostMapping("/estoque")
    public Estoque PostEstoque(@Validated @RequestBody Estoque estoque){
        return estoqueRepository.saveAndFlush(estoque);
    }

    @PutMapping("/estoque/{id}")
    public ResponseEntity<Estoque> PutEstoque(@PathVariable(value = "idEstoque") Integer id, @Validated @RequestBody Estoque newEstoque)
    {
        Optional<Estoque> oldEstoque = estoqueRepository.findById(id);
        if(oldEstoque.isPresent()){
            Estoque estoque = oldEstoque.get();
            estoque.setProduto(newEstoque.getProduto());
            estoque.setEmpresa(newEstoque.getEmpresa());
            estoque.setValorVenda(newEstoque.getValorVenda());
            estoque.setItemVenda(newEstoque.getItemVenda());
            estoque.setItemCompra(newEstoque.getItemCompra());
            estoqueRepository.save(estoque);
            return new ResponseEntity<Estoque>(estoque, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "estoque não encontrado."
        );
    }

    @DeleteMapping("/estoque/{id}")
    public ResponseEntity<Estoque> DeleteEstoque(@PathVariable(value = "idEstoque") Integer id){
        Optional<Estoque> estoque = estoqueRepository.findById((id));
        if (estoque.isPresent()){
            estoqueRepository.delete(estoque.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "estoque não encontrado."
        );
    }

    @DeleteMapping("/estoque")
    public ResponseEntity<Estoque> DeleteAllEstoque(){
        estoqueRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
