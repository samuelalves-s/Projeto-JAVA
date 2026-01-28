package br.com.samuelalves.todolist.controller;


import br.com.samuelalves.todolist.model.UserModel;
import ch.qos.logback.core.net.SyslogOutputStream;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

    @PostMapping("/")
    public void createUser(@RequestBody UserModel userModel) {
        System.out.println(userModel.getName());
    }
}
