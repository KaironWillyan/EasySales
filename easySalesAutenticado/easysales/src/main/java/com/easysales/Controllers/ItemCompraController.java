package com.easysales.Controllers;

import com.easysales.Service.ItemCompraService;
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
    private ItemCompraService itemCompraService;;

    @GetMapping("/itemCompra")
    public List<ItemCompra> getItemCompra(){
        return itemCompraService.getAllItensCompra();
    }

    @GetMapping("/itemCompra//{compraId}/{estoqueId}")
    public ResponseEntity<ItemCompra> GetItemCompraById(@PathVariable("compraId") int compraId,
            @PathVariable("estoqueId") int estoqueId){
        ItemCompra itemCompra = itemCompraService.getItemCompraById(compraId, estoqueId);
        if (itemCompra != null) {
            return new ResponseEntity<>(itemCompra, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "ItemCompra não encontrado."
        );
    };
    @PostMapping("/itemCompra")
    public ItemCompra PostItemCompra(@Validated @RequestBody ItemCompra itemCompra){
        return itemCompraService.createItemCompra(itemCompra);
    }

    @PutMapping("/itemCompra/{id}")
    public ResponseEntity<ItemCompra> PutItemCompra(@PathVariable Integer idCompra, @PathVariable Integer idEstoque, @Validated @RequestBody ItemCompra newItemCompra)
    {
        ItemCompra updatedItemCompra = itemCompraService.updateItemCompra(idCompra, idEstoque, newItemCompra);

        if(updatedItemCompra != null){
           
            return new ResponseEntity<ItemCompra>(updatedItemCompra, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemCompra não encontrado."
        );
    }

    @DeleteMapping("/itemCompra//{vendaId}/{estoqueId}")
    public ResponseEntity<ItemCompra> DeleteItemCompra(@PathVariable Integer idVenda, @PathVariable Integer idEstoque){
        itemCompraService.deleteItemCompra(idVenda, idEstoque);
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "itemCompra não encontrado."
        );
    }
}
