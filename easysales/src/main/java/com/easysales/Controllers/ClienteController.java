package com.easysales.Controllers;

import com.easysales.Repositories.ClienteRepository;
import com.easysales.entities.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.lang.Integer;

@RestController
public class ClienteController {
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/cliente")
    public List<Cliente> getCli() {
        return clienteRepository.findAll();
    }

    @RequestMapping(value = "/cliente/{id}", method = RequestMethod.GET)
    public ResponseEntity<Cliente> GetClienteById(@PathVariable(value = "idCli") Integer id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            return new ResponseEntity<Cliente>(cliente.get(), HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Cliente não encontrado."
        );
    }

//    @RequestMapping(value = "/Cliente/{N}", method = RequestMethod.GETC
// R  public ResponseEntity<List<Cliente>> GetClienteByNome(@RBquestParam String nome){
// N      List<Cliente> cliente = ClienteService.findByNome(nome);
// L      if (cliente != null){
//            return new ResponseEntity<Cliente>(cliente.get(), HttpStatus.OK);
//        }
//        throw new ResponseStatusException(
//          HttpStatus.NOT_FOUND, "cliente não encontrado."
//        );
//    }


    @PostMapping("/cliente")
    public Cliente PostCliente(@Validated @RequestBody Cliente cliente) {
        return clienteRepository.saveAndFlush(cliente);
    }

    @PutMapping("/cliente/{id}")
    public ResponseEntity<Cliente> PutCliente(@PathVariable(value = "idCli") Integer id, @Validated @RequestBody Cliente newCliente) {
        Optional<Cliente> oldCliente = clienteRepository.findById(id);
        if (oldCliente.isPresent()) {
            Cliente cliente = oldCliente.get();
            cliente.setNomeCli(newCliente.getNomeCli());
            cliente.setCpfCli(newCliente.getCpfCli());
            cliente.setRuaCli(newCliente.getRuaCli());
            cliente.setBairroCli(newCliente.getBairroCli());
            cliente.setNumCli(newCliente.getNumCli());
            cliente.setLogradouroCli(newCliente.getLogradouroCli());
            cliente.setCepCli(newCliente.getCepCli());
            cliente.setCidadeCli(newCliente.getCidadeCli());
            clienteRepository.save(cliente);
            return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "cliente não encontrado."
        );
    }

    @DeleteMapping("/cliente/{id}")
    public ResponseEntity<Cliente> DeleteCliente(@PathVariable(value = "idCli") Integer id) {
        Optional<Cliente> cliente = clienteRepository.findById((id));
        if (cliente.isPresent()) {
            clienteRepository.delete(cliente.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "cliente não encontrado."
        );
    }

    @DeleteMapping("/cliente")
    public ResponseEntity<Cliente> DeleteAllCliente() {
        clienteRepository.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);

    }
}