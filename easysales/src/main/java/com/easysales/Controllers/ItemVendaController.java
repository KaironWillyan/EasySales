package com.easysales.Controllers;

import com.easysales.Service.ItemVendaService;
import com.easysales.entities.ItemVenda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class ItemVendaController {
    @Autowired
    private ItemVendaService itemVendaService;



    @GetMapping("/itemVenda")
    public List<ItemVenda> getItemVenda(){
        return itemVendaService.getAllItensVenda();
    }

    @GetMapping("/itemVenda/{vendaId}/{estoqueId}")
    public ResponseEntity<ItemVenda> GetItemVendaById(@PathVariable Integer vendaId, @PathVariable Integer estoqueId){
        ItemVenda itemVenda = itemVendaService.getItemVendaById(vendaId, estoqueId);
        if(itemVenda != null){
            return new ResponseEntity<ItemVenda>(itemVenda, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ItemVenda não encontrado."
        );
    };
    @PostMapping("/itemVenda")
    public ItemVenda PostItemVenda(@Validated @RequestBody ItemVenda itemVenda){
        return itemVendaService.createItemVenda(itemVenda);
    }

    @PutMapping("/itemVenda/{vendaId}/{estoqueId}")
    public ResponseEntity<ItemVenda> PutItemVenda(@PathVariable Integer vendaId, @PathVariable Integer estoqueId, @Validated @RequestBody ItemVenda newItemVenda)
    {
        ItemVenda updatedItemVenda = itemVendaService.updateItemVenda(vendaId, estoqueId, newItemVenda);
        if(updatedItemVenda != null){
            return new ResponseEntity<ItemVenda>(updatedItemVenda, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemVenda não encontrado."
        );
    }

    @DeleteMapping("/itemVenda//{vendaId}/{estoqueId}")
    public ResponseEntity<ItemVenda> DeleteItemVenda(@PathVariable Integer vendaId, @PathVariable Integer estoqueId){
       itemVendaService.deleteItemVenda(vendaId, estoqueId);
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemVenda não encontrado."
        );
    }
}
