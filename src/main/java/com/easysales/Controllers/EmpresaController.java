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

import com.easysales.Service.EmpresaService;
import com.easysales.entities.Empresa;

@RestController

public class EmpresaController{
    @Autowired
    private EmpresaService empresaService;

   @GetMapping("/empresa")
    public List<Empresa> getEmpresa(){
        return empresaService.getAllEmpresas();
    }

    @GetMapping("/empresa/{id}")
    public ResponseEntity<Empresa> GetEmpresaById(@PathVariable(value = "idEmpresa") Integer id){
        Empresa empresa = empresaService.getEmpresaById(id);
        if(empresa != null){
            return new ResponseEntity<Empresa>(empresa, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Empresa não encontrado."
        );
    }

    @PostMapping("/empresa")
    public Empresa PostEmpresa(@Validated @RequestBody Empresa empresa){
        return empresaService.createEmpresa(empresa);
    }

    @PutMapping("/empresa/{id}")
    public ResponseEntity<Empresa> PutEmpresa(@PathVariable(value = "idEmpresa") Integer id, @Validated @RequestBody Empresa newEmpresa)
    {
        Empresa updatedEmpresa = empresaService.updateEmpresa(id, newEmpresa);
        if(updatedEmpresa != null){
            
            return new ResponseEntity<Empresa>(updatedEmpresa, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "empresa não encontrado."
        );
    }

    @DeleteMapping("/empresa/{id}")
    public ResponseEntity<Empresa> DeleteEmpresa(@PathVariable(value = "idEmpresa") Integer id){
        empresaService.deleteEmpresa(id);
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "empresa não encontrado."
        );
    }
}