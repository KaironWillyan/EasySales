package com.easysales.Repositories;

import com.easysales.entities.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {
}
