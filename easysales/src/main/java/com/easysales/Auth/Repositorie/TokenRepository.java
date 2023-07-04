package com.easysales.Auth.Repositorie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.easysales.Auth.entities.Token;

import java.util.List;
import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface TokenRepository extends JpaRepository<Token, Integer> {
    @Query(value = """
            select t from Token t inner join Empresa u\s
            on t.Empresa.idEmp = u.id\s
            where u.id = :id and (t.expired = false or t.revoked = false)\s
            """)
    List<Token> findAllValidTokenByUser(Integer id);

    Optional<Token> findByToken(String token);
}
