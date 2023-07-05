package com.easysales.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;


@Embeddable
public class ItemCompraId implements Serializable {
        private int compraId;
    private int estoqueId;

    public ItemCompraId() {
    }

    public ItemCompraId(int compraId, int estoqueId) {
        this.compraId = compraId;
        this.estoqueId = estoqueId;
    }

    // Getters e Setters

    public int getCompraId() {
        return compraId;
    }

    public void setCompraId(int compraId) {
        this.compraId = compraId;
    }

    public int getEstoqueId() {
        return estoqueId;
    }

    public void setEstoqueId(int estoqueId) {
        this.estoqueId = estoqueId;
    }

    // Equals e HashCode

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ItemCompraId that = (ItemCompraId) o;
        return compraId == that.compraId && estoqueId == that.estoqueId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(compraId, estoqueId);
    }
}
