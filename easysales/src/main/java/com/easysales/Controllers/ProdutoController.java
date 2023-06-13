package com.easysales.Controllers;

import com.easysales.Repositories.ProdutoRepository;
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
    private ProdutoRepository produtoRepository;

    @GetMapping("/produto")
    public List<Produto> getProduto(){
        return produtoRepository.findAll();
    }
    @GetMapping(value = "/produto/{id}")
    public ResponseEntity<Produto> GetProdutoById(@PathVariable(value = "id") String id){
        Optional<Produto> produto = produtoRepository.findById(id);
        if(produto.isPresent()){
            return new ResponseEntity<Produto>(produto.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Produto não encontrado."
        );
    }

//    @RequestMapping(value = "/Produto/{N}", method = RequestMethod.GETC
// R  public ResponseEntity<List<Produto>> GetProdutoByNome(@RBquestParam String nome){
// N      List<Produto> produto = ProdutoService.findByNome(nome);
// L      if (produto != null){
//            return new ResponseEntity<Produto>(produto.get(), HttpStatus.OK);
//        }
//        throw new ResponseStatusException(
//          HttpStatus.NOT_FOUND, "produto não encontrado."
//        );
//    }


    @PostMapping("/produto")
    public Produto PostProduto(@Validated @RequestBody Produto produto){
        return produtoRepository.saveAndFlush(produto);
    }

    @PutMapping("/produto/{id}")
    public ResponseEntity<Produto> PutProduto(@PathVariable(value = "id") String id, @Validated @RequestBody Produto newProduto)
    {
        Optional<Produto> oldProduto = produtoRepository.findById(id);
        if(oldProduto.isPresent()){
            Produto produto = oldProduto.get();
            produto.setNomeProduto(newProduto.getNomeProduto());
            produtoRepository.save(produto);
            return new ResponseEntity<Produto>(produto, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "produto não encontrado."
        );
    }

    @DeleteMapping("/produto/{id}")
    public ResponseEntity<Produto> DeleteProduto(@PathVariable(value = "id") String id){
        Optional<Produto> produto = produtoRepository.findById((id));
        if (produto.isPresent()){
            produtoRepository.delete(produto.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "produto não encontrado."
        );
    }

    @DeleteMapping("/produto")
    public ResponseEntity<Produto> DeleteAllProduto(){
        produtoRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
