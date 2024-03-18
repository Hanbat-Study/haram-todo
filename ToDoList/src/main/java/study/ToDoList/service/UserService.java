package study.ToDoList.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import study.ToDoList.entity.User;
import study.ToDoList.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User login(String loginId, String password) {
        User user = userRepository.findByLoginId(loginId);

        if (user.getPassword().equals(password)) {
            return user;
        }

        return null;
    }

    public User signup(User user) {
        return userRepository.save(user);
    }
}
