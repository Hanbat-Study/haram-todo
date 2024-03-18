package study.ToDoList.controller;

import com.sun.tools.jconsole.JConsoleContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import study.ToDoList.dto.LoginRequest;
import study.ToDoList.dto.UserRequest;
import study.ToDoList.entity.User;
import study.ToDoList.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody LoginRequest loginRequest) {
        User user = userService.login(loginRequest.getLoginId(), loginRequest.getPassword());

        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.badRequest().body("로그인 실패!");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserRequest userRequest) {
        String gender = userRequest.getGender();
        String hometown = userRequest.getHometown();

        if(!(gender.equals("male") || gender.equals(("female"))))
            throw new IllegalArgumentException("gender에 잘못된 값이 들어왔어요!");

        if(!(hometown.equals("seoul") || hometown.equals("incheon") || hometown.equals("daejeon")
                || hometown.equals("sejong") || hometown.equals("gwangju") || hometown.equals("deagu")
                || hometown.equals("ulsan") || hometown.equals("busan") || hometown.equals("jeju")
                || hometown.equals("gyeonggi") || hometown.equals("gangwon") || hometown.equals("chungcheong")
                || hometown.equals("jeonlla") || hometown.equals("gyeongsang")))
            throw new IllegalArgumentException("hometown에 잘못된 값이 들어왔어요!");

        User user = new User();
        user.setName(userRequest.getName());
        user.setGender(gender);
        user.setBirth(userRequest.getBirth());
        user.setHometown(hometown);
        user.setLoginId(userRequest.getLoginId());
        user.setPassword(userRequest.getPassword());

        User savedUser = userService.signup(user);
        return ResponseEntity.ok(savedUser); // 회원가입 성공 시 User 정보 반환
    }
}
