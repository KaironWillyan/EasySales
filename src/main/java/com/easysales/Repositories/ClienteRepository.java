package com.easysales.Repositories;

import com.easysales.entities.Cliente;
import org.hibernate.annotations.NamedNativeQuery;
import org.hibernate.dialect.PostgreSQLDialect;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@EnableJpaRepositories

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
