package com.easysales.Controllers;

import java.util.List;
import java.util.Optional;

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

import com.easysales.Repositories.EmpresaRepository;
import com.easysales.entities.Empresa;

@RestController

public class EmpresaController{
    @Autowired
    private EmpresaRepository empresaRepository;;

   @GetMapping("/empresa")
    public List<Empresa> getEmpresa(){
        return empresaRepository.findAll();
    }

    @GetMapping("/empresa/{id}")
    public ResponseEntity<Empresa> GetEmpresaById(@PathVariable(value = "idEmpresa") Integer id){
        Optional<Empresa> empresa = empresaRepository.findById(id);
        if(empresa.isPresent()){
            return new ResponseEntity<Empresa>(empresa.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Empresa não encontrado."
        );
    }

    @PostMapping("/empresa")
    public Empresa PostEmpresa(@Validated @RequestBody Empresa empresa){
        return empresaRepository.saveAndFlush(empresa);
    }

    @PutMapping("/empresa/{id}")
    public ResponseEntity<Empresa> PutEmpresa(@PathVariable(value = "idEmpresa") Integer id, @Validated @RequestBody Empresa newEmpresa)
    {
        Optional<Empresa> oldEmpresa = empresaRepository.findById(id);
        if(oldEmpresa.isPresent()){
            Empresa empresa = oldEmpresa.get();
            empresa.setNomeEmpresa(newEmpresa.getNomeEmpresa());
            empresa.setEmail(newEmpresa.getEmail());
            empresa.setSenha(newEmpresa.getSenha());
            empresaRepository.save(empresa);
            return new ResponseEntity<Empresa>(empresa, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "empresa não encontrado."
        );
    }

    @DeleteMapping("/empresa/{id}")
    public ResponseEntity<Empresa> DeleteEmpresa(@PathVariable(value = "idEmpresa") Integer id){
        Optional<Empresa> empresa = empresaRepository.findById((id));
        if (empresa.isPresent()){
            empresaRepository.delete(empresa.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "empresa não encontrado."
        );
    }

    @DeleteMapping("/empresa")
    public ResponseEntity<Empresa> DeleteAllEmpresa(){
        empresaRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}