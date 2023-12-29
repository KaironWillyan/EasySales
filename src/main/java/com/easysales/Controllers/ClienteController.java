package com.easysales.Controllers;

    import com.easysales.Service.ClienteService;
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
import java.lang.Integer;

@RestController
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/cliente")
    public List<Cliente> getCli() {
        return clienteService.getAllClientes();
    }

    @RequestMapping(value = "/cliente/{id}", method = RequestMethod.GET)
    public ResponseEntity<Cliente> GetClienteById(@PathVariable(value = "idCli") Integer id) {
        Cliente cliente = clienteService.getClienteById(id);
        if (cliente != null) {
            return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
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
        return clienteService.createCliente(cliente);
    }

    @PutMapping("/cliente/{id}")
    public ResponseEntity<Cliente> PutCliente(@PathVariable Integer id, @Validated @RequestBody Cliente newCliente) {
        Cliente updatedCliente = clienteService.updateCliente(id, newCliente);
         if (updatedCliente != null) {
            return new ResponseEntity<>(updatedCliente, HttpStatus.OK);
        }
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "cliente não encontrado."
        );
    }

    @DeleteMapping("/cliente/{id}")
    public ResponseEntity<Cliente> DeleteCliente(@PathVariable Integer id) {
        clienteService.deleteCliente(id);
        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND, "cliente não encontrado."
        );
    }
}