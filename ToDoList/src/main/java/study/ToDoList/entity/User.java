package study.ToDoList.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class User {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private String gender;

    @Getter
    @Setter
    private String birth;

    @Getter
    @Setter
    private String hometown;

    @Getter
    @Setter
    private String loginId;

    @Getter
    @Setter
    private String password;
}

