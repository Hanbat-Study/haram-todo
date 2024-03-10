class SignIn {
  #app;
  #id;
  #password;

  constructor(app) {
    this.#app = app;
    this.#id = "";
    this.#password = "";

    this.onChangeId();
    this.onChangePassword();
    this.login();
    this.goSignup();
  }

  onChangeId() {
    let idInput = this.#app.getElementById("id");
    idInput.addEventListener("change", (e) => {
      this.#id = e.target.value;
    });
  }

  onChangePassword() {
    let passwordInput = this.#app.getElementById("password");
    passwordInput.addEventListener("change", (e) => {
      this.#password = e.target.value;
    });
  }

  login() {
    let form = this.#app.getElementsByTagName("form")[0];
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("id: " + this.#id + " password: " + this.#password);
    });
  }

  goSignup() {
    let goSignupButton = this.#app.getElementById("go-signup");
    goSignupButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.navigateTo("회원가입 페이지");
    });
  }

  navigateTo(page) {
      console.log(`${page}로 이동합니다.`); 
  }
}

s = new SignIn(document);