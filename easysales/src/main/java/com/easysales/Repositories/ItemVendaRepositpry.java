package com.easysales.Repositories;

import com.easysales.entities.ItemVenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemVendaRepositpry extends JpaRepository<ItemVenda, String> {
}
