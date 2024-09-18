package com.easysales.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Embeddable @Data @AllArgsConstructor @NoArgsConstructor @Builder
public class ItemCompraId implements Serializable {
    private Long compraId;
    private Long estoqueId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemCompraId that = (ItemCompraId) o;
        return Objects.equals(compraId, that.compraId) && Objects.equals(estoqueId, that.estoqueId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(compraId, estoqueId);
    }
}
