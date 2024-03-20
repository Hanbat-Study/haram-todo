// function signIn() {} -> 함수형 컴포넌트
// 클래스형 컴포넌트 => 차이는 궁금하면 검색
class SignIn {
  #app;
  loginId;
  password;

  constructor(app) {
    this.#app = app;
    this.loginId = "";
    this.password = "";

    this.login();
  }

  login() {
    this.#app.getElementById("signinForm").addEventListener("submit", (e) => {
      e.preventDefault();
      this.loginId = this.#app.getElementById("loginId").value;
      this.password = this.#app.getElementById("password").value;
      console.log("id: " + this.loginId + " password: " + this.password);
    });
  }
}

new SignIn(document);
