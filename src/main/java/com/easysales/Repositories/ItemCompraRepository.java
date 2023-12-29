package com.easysales.Repositories;

import com.easysales.entities.ItemCompra;
import com.easysales.entities.ItemCompraId;
import com.easysales.entities.ItemVenda;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface ItemCompraRepository extends JpaRepository<ItemCompra, ItemCompraId>{

}