package com.easysales.Repositories;

import com.easysales.entities.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface EstoqueRepository extends JpaRepository<Estoque, Integer> {
}
