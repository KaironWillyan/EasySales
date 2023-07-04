package com.easysales.Auth.Repositorie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.easysales.Auth.entities.Empresa;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Empresa, Integer> {

    Optional<Empresa> findByEmail(String email);
}
