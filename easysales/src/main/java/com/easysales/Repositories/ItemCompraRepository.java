package com.easysales.Repositories;

import com.easysales.entities.ItemCompra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ItemCompraRepository extends JpaRepository<ItemCompra, Integer>{

}