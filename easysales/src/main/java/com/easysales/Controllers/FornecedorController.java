package com.easysales.Controllers;

import com.easysales.Repositories.FornecedorRepository;
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
import java.util.Optional;
import java.lang.Integer;

@RestController
public class FornecedorController{
    @Autowired
    private FornecedorRepository fornecedorRepository;

    @GetMapping("/fornecedor")
    public List<Fornecedor> getFornecedor(){
        return fornecedorRepository.findAll();
    }
    @RequestMapping(value = "/fornecedor/{id}", method = RequestMethod.GET)
    public ResponseEntity<Fornecedor> GetFornecedorById(@PathVariable(value = "idFornecedor") Integer id){
        Optional<Fornecedor> fornecedor = fornecedorRepository.findById(id);
        if(fornecedor.isPresent()){
            return new ResponseEntity<Fornecedor>(fornecedor.get(), HttpStatus.OK);
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
        return fornecedorRepository.saveAndFlush(fornecedor);
    }

    @PutMapping("/fornecedor/{id}")
    public ResponseEntity<Fornecedor> PutFornecedor(@PathVariable(value = "idFornecedor") Integer id, @Validated @RequestBody Fornecedor newFornecedor)
    {
        Optional<Fornecedor> oldFornecedor = fornecedorRepository.findById(id);
        if(oldFornecedor.isPresent()){
            Fornecedor fornecedor = oldFornecedor.get();
            fornecedor.setNomeFornecedor(newFornecedor.getNomeFornecedor());
            fornecedor.setCpfFornecedor(newFornecedor.getCpfFornecedor());
            fornecedor.setRuaFornecedor(newFornecedor.getRuaFornecedor());
            fornecedor.setBairroFornecedor(newFornecedor.getBairroFornecedor());
            fornecedor.setNumFornecedor(newFornecedor.getNumFornecedor());
            fornecedor.setLogradouroFornecedor(newFornecedor.getLogradouroFornecedor());
            fornecedor.setCepFornecedor(newFornecedor.getCepFornecedor());
            fornecedor.setCidadeFornecedor(newFornecedor.getCidadeFornecedor());
            fornecedorRepository.save(fornecedor);
            return new ResponseEntity<Fornecedor>(fornecedor, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "fornecedor não encontrado."
        );
    }

    @DeleteMapping("/fornecedor/{id}")
    public ResponseEntity<Fornecedor> DeleteFornecedor(@PathVariable(value = "idFornecedor") Integer id){
        Optional<Fornecedor> fornecedor = fornecedorRepository.findById((id));
        if (fornecedor.isPresent()){
            fornecedorRepository.delete(fornecedor.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "fornecedor não encontrado."
        );
    }

    @DeleteMapping("/fornecedor")
    public ResponseEntity<Fornecedor> DeleteAllFornecedor(){
        fornecedorRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
