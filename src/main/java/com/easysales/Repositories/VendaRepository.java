package com.easysales.Repositories;

import com.easysales.entities.Venda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface VendaRepository extends JpaRepository<Venda, Long> {
}
