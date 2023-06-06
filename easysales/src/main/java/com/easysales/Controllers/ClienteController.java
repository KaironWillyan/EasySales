package com.easysales.Controllers;

import com.easysales.Repositories.ClienteRepository;
import com.easysales.entities.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClienteController{
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/cliente")
    public List<Cliente> getCli(){
        return clienteRepository.findAll();
    }
}
