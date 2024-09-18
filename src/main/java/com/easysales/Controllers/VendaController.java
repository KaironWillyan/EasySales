package com.easysales.Controllers;

import com.easysales.Service.VendaService;
import com.easysales.entities.Venda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
public class VendaController {
    @Autowired
    private VendaService vendaService;

    @GetMapping("/venda")
    public List<Venda> getVenda(){
        return vendaService.getAllVendas();
    }
    
    @RequestMapping(value = "/venda/{id}", method = RequestMethod.GET)
    public ResponseEntity<Venda> GetVendaById(@PathVariable  Long id){
        Venda venda = vendaService.getVendaById(id);
        if(venda != null){
            return new ResponseEntity<Venda>(venda, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Venda não encontrado."
        );
    }

    @PostMapping("/venda")
    public Venda PostVenda(@Validated @RequestBody Venda venda){
        return vendaService.createVenda(venda);
    }

    @PutMapping("/venda/{id}")
    public ResponseEntity<Venda> PutVenda(@PathVariable Long id, @Validated @RequestBody Venda newVenda)
    {
        Venda updatedVenda = vendaService.updateVenda(id, newVenda);
        if(updatedVenda != null){
            return new ResponseEntity<Venda>(updatedVenda, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "venda não encontrado."
        );
    }

    @DeleteMapping("/venda/{id}")
    public ResponseEntity<Venda> DeleteVenda(@PathVariable  Long id){
        vendaService.deleteVenda((id));
       
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "venda não encontrado."
        );
    }
}
