package com.easysales.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Embeddable @Data @AllArgsConstructor @NoArgsConstructor @Builder
public class ItemVendaId implements Serializable{
    private Long vendaId;
    private Long estoqueId;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemVendaId that = (ItemVendaId) o;
        return vendaId.equals(that.vendaId) && Objects.equals(estoqueId, that.estoqueId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(vendaId, estoqueId);
    }
}
