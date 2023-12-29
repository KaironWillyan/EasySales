package com.easysales.Repositories;

import com.easysales.entities.ItemVenda;
import com.easysales.entities.ItemVendaId;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ItemVendaRepository extends JpaRepository<ItemVenda, ItemVendaId> {
}
