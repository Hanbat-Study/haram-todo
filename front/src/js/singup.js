class Signup {
  #app;
  name;
  gender;
  birthday;
  hometown;
  loginId;
  password;

  constructor(app) {
    this.#app = app;
    this.name = "";
    this.gender = 0;
    this.birthday = "";
    this.hometown = "";
    this.loginId = "";
    this.password = "";

    this.signup();
  }

  signup() {
    this.#app.getElementById("signupForm").addEventListener("submit", (e) => {
      e.preventDefault();
      this.name = this.#app.getElementById("name").value;
      this.gender = this.#app.getElementById("female").checked
        ? "female"
        : "male";
      this.birth = this.#app.getElementById("birth").value;
      this.hometown = this.#app.getElementById("hometown").value;
      this.loginId = this.#app.getElementById("loginId").value;
      this.password = this.#app.getElementById("password").value;

      console.log(
        "이름: " +
          this.name +
          "\n성별: " +
          this.gender +
          "\n생일: " +
          this.birthday +
          "\n고향: " +
          this.hometown +
          "\n아이디: " +
          this.loginId +
          "\n비밀 번호: " +
          this.password
      );
    });
  }
}

new Signup(document);
