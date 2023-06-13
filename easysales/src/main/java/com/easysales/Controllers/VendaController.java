package com.easysales.Controllers;

import com.easysales.Repositories.VendaRepository;
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
    private VendaRepository vendaRepository;

    @GetMapping("/venda")
    public List<Venda> getVenda(){
        return vendaRepository.findAll();
    }
    @RequestMapping(value = "/venda/{id}", method = RequestMethod.GET)
    public ResponseEntity<Venda> GetVendaById(@PathVariable(value = "idVenda") Integer id){
        Optional<Venda> venda = vendaRepository.findById(id);
        if(venda.isPresent()){
            return new ResponseEntity<Venda>(venda.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Venda não encontrado."
        );
    }

//    @RequestMapping(value = "/Venda/{N}", method = RequestMethod.GETC
// R  public ResponseEntity<List<Venda>> GetVendaByNome(@RBquestParam String nome){
// N      List<Venda> venda = VendaService.findByNome(nome);
// L      if (venda != null){
//            return new ResponseEntity<Venda>(venda.get(), HttpStatus.OK);
//        }
//        throw new ResponseStatusException(
//          HttpStatus.NOT_FOUND, "venda não encontrado."
//        );
//    }

    @PostMapping("/venda")
    public Venda PostVenda(@Validated @RequestBody Venda venda){
        return vendaRepository.saveAndFlush(venda);
    }

    @PutMapping("/venda/{id}")
    public ResponseEntity<Venda> PutVenda(@PathVariable(value = "idVenda") Integer id, @Validated @RequestBody Venda newVenda)
    {
        Optional<Venda> oldVenda = vendaRepository.findById(id);
        if(oldVenda.isPresent()){
            Venda venda = oldVenda.get();
            venda.setItemVenda(newVenda.getItemVenda());
            venda.setCliente(newVenda.getCliente());
            venda.setDtVenda(newVenda.getDtVenda());
            venda.setQtdItens(newVenda.getQtdItens());
            venda.setQtdParcelas(newVenda.getQtdParcelas());
            venda.setQtdParcelasFalta(newVenda.getQtdParcelasFalta());
            venda.setValorTotalVenda(newVenda.getValorTotalVenda());
            vendaRepository.save(venda);
            return new ResponseEntity<Venda>(venda, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "venda não encontrado."
        );
    }

    @DeleteMapping("/venda/{id}")
    public ResponseEntity<Venda> DeleteVenda(@PathVariable(value = "id") Integer id){
        Optional<Venda> venda = vendaRepository.findById((id));
        if (venda.isPresent()){
            vendaRepository.delete(venda.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "venda não encontrado."
        );
    }

    @DeleteMapping("/venda")
    public ResponseEntity<Venda> DeleteAllVenda(){
        vendaRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
