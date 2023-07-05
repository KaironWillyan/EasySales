package com.easysales.Controllers;

import com.easysales.Service.FornecedorService;
import com.easysales.entities.Fornecedor;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.lang.Integer;

@RestController
public class FornecedorController{
    @Autowired
    private FornecedorService fornecedorService;

    @GetMapping("/fornecedor")
    public List<Fornecedor> getFornecedor(){
        return fornecedorService.getAllFornecedores();
    }

    @RequestMapping(value = "/fornecedor/{id}", method = RequestMethod.GET)
    public ResponseEntity<Fornecedor> GetFornecedorById(@PathVariable(value = "idFn") Integer id){
        Fornecedor fornecedor = fornecedorService.getFornecedorById(id);
        if(fornecedor != null){
            return new ResponseEntity<Fornecedor>(fornecedor, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Fornecedor não encontrado."
        );
    }

//    @RequestMapping(value = "/Fornecedor/{N}", method = RequestMethod.GETC
// R  public ResponseEntity<List<Fornecedor>> GetFornecedorByNome(@RBquestParam String nome){
// N      List<Fornecedor> fornecedor = FornecedorService.findByNome(nome);
// L      if (fornecedor != null){
//            return new ResponseEntity<Fornecedor>(fornecedor.get(), HttpStatus.OK);
//        }
//        throw new ResponseStatusException(
//          HttpStatus.NOT_FOUND, "fornecedor não encontrado."
//        );
//    }


    @PostMapping("/fornecedor")
    public Fornecedor PostFornecedor(@Validated @RequestBody Fornecedor fornecedor){
        return fornecedorService.createFornecedor(fornecedor);
    }

    @PutMapping("/fornecedor/{id}")
    public ResponseEntity<Fornecedor> PutFornecedor(@PathVariable(value = "idFn") Integer id, @Validated @RequestBody Fornecedor newFornecedor)
    {
      Fornecedor updatedFornecedor = fornecedorService.updateFornecedor(id, newFornecedor);
      if(updatedFornecedor != null){
        return new ResponseEntity<Fornecedor>(updatedFornecedor, HttpStatus.OK);
    }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "fornecedor não encontrado."
        );
    }

    @DeleteMapping("/fornecedor/{id}")
    public ResponseEntity<Fornecedor> DeleteFornecedor(@PathVariable(value = "idFn") Integer id){
     fornecedorService.deleteFornecedor(id);
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "fornecedor não encontrado."
        );
    }
}
