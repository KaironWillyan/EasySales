package com.easysales.Controllers;

import com.easysales.Service.ProdutoService;
import com.easysales.entities.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
public class ProdutoController{
    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/produto")
    public List<Produto> getProduto(){
        return produtoService.getAllProdutos();
    }
    @GetMapping(value = "/produto/{id}")
    public ResponseEntity<Produto> GetProdutoById(@PathVariable Long id){
        Produto produto = produtoService.getProdutoById(id);
        if(produto != null){
            return new ResponseEntity<Produto>(produto, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Produto não encontrado."
        );
    }

    @PostMapping("/produto")
    public Produto PostProduto(@Validated @RequestBody Produto produto){
        return produtoService.createProduto(produto);
    }

    @PutMapping("/produto/{id}")
    public ResponseEntity<Produto> PutProduto(@PathVariable Long id, @Validated @RequestBody Produto newProduto)
    {
        Produto updateProduto = produtoService.updateProduto(id, newProduto);
        if(updateProduto != null){
            return new ResponseEntity<Produto>(updateProduto, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "produto não encontrado."
        );
    }

    @DeleteMapping("/produto/{id}")
    public ResponseEntity<Produto> DeleteProduto(@PathVariable  Long id){
        produtoService.deleteProduto((id));

        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "produto não encontrado."
        );
    }
}
