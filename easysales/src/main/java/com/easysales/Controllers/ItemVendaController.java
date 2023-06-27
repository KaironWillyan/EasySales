package com.easysales.Controllers;

import com.easysales.Repositories.ItemCompraRepository;
import com.easysales.Repositories.ItemVendaRepositpry;
import com.easysales.entities.ItemVenda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

public class ItemVendaController {
    @Autowired
    private ItemVendaRepositpry itemVendaRepository;;

    @GetMapping("/itemVenda")
    public List<ItemVenda> getItemVenda(){
        return itemVendaRepository.findAll();
    }

    @GetMapping("/itemVenda/{id}")
    public ResponseEntity<ItemVenda> GetItemVendaById(@PathVariable(value = "idItemVenda") Integer id){
        Optional<ItemVenda> itemVenda = itemVendaRepository.findById(id);
        if(itemVenda.isPresent()){
            return new ResponseEntity<ItemVenda>(itemVenda.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ItemVenda não encontrado."
        );
    };
    @PostMapping("/itemVenda")
    public ItemVenda PostItemVenda(@Validated @RequestBody ItemVenda itemVenda){
        return itemVendaRepository.saveAndFlush(itemVenda);
    }

    @PutMapping("/itemVenda/{id}")
    public ResponseEntity<ItemVenda> PutItemVenda(@PathVariable(value = "idItemVenda") Integer id, @Validated @RequestBody ItemVenda newItemVenda)
    {
        Optional<ItemVenda> oldItemVenda = itemVendaRepository.findById(id);
        if(oldItemVenda.isPresent()){
            ItemVenda itemVenda = oldItemVenda.get();
            itemVenda.setEstoque(newItemVenda.getEstoque());
            itemVenda.setVenda(newItemVenda.getVenda());
            itemVenda.setValorTotalItemVenda(newItemVenda.getValorTotalItemVenda());
            itemVenda.setPrecoItemVenda(newItemVenda.getPrecoItemVenda());
            itemVendaRepository.save(itemVenda);
            return new ResponseEntity<ItemVenda>(itemVenda, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemVenda não encontrado."
        );
    }

    @DeleteMapping("/itemVenda/{id}")
    public ResponseEntity<ItemVenda> DeleteItemVenda(@PathVariable(value = "idItemVenda") Integer id){
        Optional<ItemVenda> itemVenda = itemVendaRepository.findById((id));
        if (itemVenda.isPresent()){
            itemVendaRepository.delete(itemVenda.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemVenda não encontrado."
        );
    }

    @DeleteMapping("/itemVenda")
    public ResponseEntity<ItemVenda> DeleteAllItemVenda(){
        itemVendaRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
