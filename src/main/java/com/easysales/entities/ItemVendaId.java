package com.easysales.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;


@Embeddable
public class ItemVendaId implements Serializable{
    private int vendaId;
    private int estoqueId;

    public ItemVendaId() {
    }

    public ItemVendaId(int vendaId, int estoqueId) {
        this.vendaId = vendaId;
        this.estoqueId = estoqueId;
    }

    // Getters e Setters

    public int getVendaId() {
        return vendaId;
    }

    public void setVendaId(int vendaId) {
        this.vendaId = vendaId;
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
        ItemVendaId that = (ItemVendaId) o;
        return vendaId == that.vendaId && estoqueId == that.estoqueId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(vendaId, estoqueId);
    }
}
