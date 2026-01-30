package br.com.samuelalves.todolist.controller;


import br.com.samuelalves.todolist.model.UserModel;
import br.com.samuelalves.todolist.repository.IUserRepository;
import ch.qos.logback.core.net.SyslogOutputStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserRepository iUserRepository;

    @PostMapping("/")
    public UserModel createUser(@RequestBody UserModel userModel) {
        var user = this.iUserRepository.findByUsername(userModel.getUsername());

        if (user != null) {
            System.out.println("Usuario já existente, tente outro username!");
            return null;
        }

        this.iUserRepository.save(userModel);
        return userModel;
    }
}
