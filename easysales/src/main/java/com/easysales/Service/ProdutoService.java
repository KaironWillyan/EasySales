package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.ProdutoRepository;
import com.easysales.entities.Produto;

@Service
public class ProdutoService {
      @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> getAllProdutos() {
        return produtoRepository.findAll();
    }

    public Produto getProdutoById(Integer id) {
        return produtoRepository.findById(id).orElse(null);
    }

    public Produto createProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto updateProduto(Integer id, Produto produto) {
        if (produtoRepository.existsById(id)) {
            produto.setIdProd(id);
            return produtoRepository.save(produto);
        }
        return null;
    }

    public void deleteProduto(Integer id) {
        produtoRepository.deleteById(id);
    }
}
