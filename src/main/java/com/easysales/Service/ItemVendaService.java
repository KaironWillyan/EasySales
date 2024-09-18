package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.ItemVendaRepository;
import com.easysales.entities.ItemVenda;
import com.easysales.entities.ItemVendaId;

@Service
public class ItemVendaService {
     @Autowired
    private ItemVendaRepository itemVendaRepository;

    public List<ItemVenda> getAllItensVenda() {
        return itemVendaRepository.findAll();
    }

    public ItemVenda getItemVendaById(Long vendaId, Long estoqueId) {
        ItemVendaId id = new ItemVendaId(vendaId, estoqueId);
        return itemVendaRepository.findById(id).orElse(null);
    }

    public ItemVenda createItemVenda(ItemVenda itemVenda) {
        return itemVendaRepository.save(itemVenda);
    }

    public ItemVenda updateItemVenda(Long vendaId, Long estoqueId, ItemVenda itemVenda) {
        ItemVendaId id = new ItemVendaId(vendaId, estoqueId);
        if (itemVendaRepository.existsById(id)) {
            itemVenda.setId(id);
            return itemVendaRepository.save(itemVenda);
        }
        return null;
    }

    public void deleteItemVenda(Long vendaId, Long estoqueId) {
        ItemVendaId id = new ItemVendaId(vendaId, estoqueId);
        itemVendaRepository.deleteById(id);
    }
}
