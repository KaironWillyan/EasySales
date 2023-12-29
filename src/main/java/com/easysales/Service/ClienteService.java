package com.easysales.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easysales.Repositories.ClienteRepository;
import com.easysales.entities.Cliente;

@Service    
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public Cliente getClienteById(Integer id) {
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente createCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente updateCliente(Integer id, Cliente cliente) {
        if (clienteRepository.existsById(id)) {
            cliente.setId(id);
            return clienteRepository.save(cliente);
        }
        return null;
    }

    public void deleteCliente(Integer id) {
        clienteRepository.deleteById(id);
    }
}
