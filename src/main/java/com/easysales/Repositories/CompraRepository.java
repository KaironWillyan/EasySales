package com.easysales.Repositories;

import com.easysales.entities.Compra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@EnableJpaRepositories

@Repository
public interface CompraRepository extends JpaRepository<Compra, Integer> {
}
