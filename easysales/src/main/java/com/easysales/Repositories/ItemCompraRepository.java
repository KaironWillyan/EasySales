package com.easysales.Repositories;

import com.easysales.entities.ItemCompra;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;

@Repository
public interface ItemCompraRepository extends JpaRepository<ItemCompra, String>{

}