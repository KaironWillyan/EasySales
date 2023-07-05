package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.ItemCompraRepository;
import com.easysales.entities.ItemCompra;
import com.easysales.entities.ItemCompraId;

@Service
public class ItemCompraService {
 @Autowired
    private ItemCompraRepository itemCompraRepository;

    public List<ItemCompra> getAllItensCompra() {
        return itemCompraRepository.findAll();
    }

    public ItemCompra getItemCompraById(Integer compraId, Integer estoqueId) {
        ItemCompraId id = new ItemCompraId(compraId, estoqueId);
        return itemCompraRepository.findById(id).orElse(null);
    }

    public ItemCompra createItemCompra(ItemCompra itemCompra) {
        return itemCompraRepository.save(itemCompra);
    }

    public ItemCompra updateItemCompra(Integer compraId, Integer estoqueId, ItemCompra itemCompra) {
        ItemCompraId id = new ItemCompraId(compraId, estoqueId);
        if (itemCompraRepository.existsById(id)) {
            itemCompra.setId(id);
            return itemCompraRepository.save(itemCompra);
        }
        return null;
    }

    public void deleteItemCompra(Integer compraId, Integer estoqueId) {
        ItemCompraId id = new ItemCompraId(compraId, estoqueId);
        itemCompraRepository.deleteById(id);
    }
}
