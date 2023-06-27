package com.easysales.Controllers;

import com.easysales.Repositories.ItemCompraRepository;
import com.easysales.entities.ItemCompra;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
public class ItemCompraController {
    @Autowired
    private ItemCompraRepository itemCompraRepository;;

    @GetMapping("/itemCompra")
    public List<ItemCompra> getItemCompra(){
        return itemCompraRepository.findAll();
    }

    @GetMapping("/itemCompra/{id}")
    public ResponseEntity<ItemCompra> GetItemCompraById(@PathVariable(value = "idItemCompra") Integer id){
        Optional<ItemCompra> itemCompra = itemCompraRepository.findById(id);
        if(itemCompra.isPresent()){
            return new ResponseEntity<ItemCompra>(itemCompra.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ItemCompra não encontrado."
        );
    };
    @PostMapping("/itemCompra")
    public ItemCompra PostItemCompra(@Validated @RequestBody ItemCompra itemCompra){
        return itemCompraRepository.saveAndFlush(itemCompra);
    }

    @PutMapping("/itemCompra/{id}")
    public ResponseEntity<ItemCompra> PutItemCompra(@PathVariable(value = "idItemCompra") Integer id, @Validated @RequestBody ItemCompra newItemCompra)
    {
        Optional<ItemCompra> oldItemCompra = itemCompraRepository.findById(id);
        if(oldItemCompra.isPresent()){
            ItemCompra itemCompra = oldItemCompra.get();
            itemCompra.setCompra(newItemCompra.getCompra());
            itemCompra.setDtCompra(newItemCompra.getDtCompra());
            itemCompra.setValorUnitCompra(newItemCompra.getValorUnitCompra());
            itemCompra.setQtdComprada(newItemCompra.getQtdComprada());
            itemCompra.setEstoque(newItemCompra.getEstoque());
            itemCompraRepository.save(itemCompra);
            return new ResponseEntity<ItemCompra>(itemCompra, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemCompra não encontrado."
        );
    }

    @DeleteMapping("/itemCompra/{id}")
    public ResponseEntity<ItemCompra> DeleteItemCompra(@PathVariable(value = "idItemCompra") Integer id){
        Optional<ItemCompra> itemCompra = itemCompraRepository.findById((id));
        if (itemCompra.isPresent()){
            itemCompraRepository.delete(itemCompra.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemCompra não encontrado."
        );
    }

    @DeleteMapping("/itemCompra")
    public ResponseEntity<ItemCompra> DeleteAllItemCompra(){
        itemCompraRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
