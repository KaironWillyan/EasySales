package com.easysales.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.easysales.entities.Empresa;
import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface AccountRepository extends JpaRepository<Empresa, Integer> {
    public Optional<Empresa> findByEmailEmp(String emailEmp);
}
