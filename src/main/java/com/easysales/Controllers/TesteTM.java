package com.easysales.Controllers;

import com.easysales.Service.ClienteService;
import com.easysales.Service.ProdutoService;
import com.easysales.entities.Cliente;
import com.easysales.entities.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

@Controller
@Secured("")
public class TesteTM {
    @Autowired
    ProdutoService produtoService;

    @GetMapping(path = "/")
    public String index() {
        return "external";
    }

    @GetMapping(path = "/customers")
    public String customers(Principal principal, Model model) {
        addProdutos();
        model.addAttribute("customers", produtoService.getAllProdutos());
        model.addAttribute("username", principal.getName());
        return "customers";
    }

    public void addProdutos() {

        Produto customer1 = new Produto();
        customer1.setNome("Macarrao");
        produtoService.createProduto(customer1);

        Produto customer2 = new Produto();
        customer2.setNome("Macarrao");
        produtoService.createProduto(customer2);

        Produto customer3 = new Produto();
        customer3.setNome("Macarrao");
        produtoService.createProduto(customer3);
    }
}
