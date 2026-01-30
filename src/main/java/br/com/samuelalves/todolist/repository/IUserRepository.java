package br.com.samuelalves.todolist.repository;

import br.com.samuelalves.todolist.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IUserRepository extends JpaRepository<UserModel , UUID> {

    UserModel findByUsername (String username);
}
