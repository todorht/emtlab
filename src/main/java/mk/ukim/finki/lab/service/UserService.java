package mk.ukim.finki.lab.service;


import mk.ukim.finki.lab.model.User;
import mk.ukim.finki.lab.model.enums.Role;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    User register(String username, String password,
                  String name, String surname, Role role);
}
