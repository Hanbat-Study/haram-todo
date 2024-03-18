package study.ToDoList.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserRequest {
    private String name;
    private String gender;
    private String birth;
    private String hometown;
    private String loginId;
    private String password;
}
