class Signup {
  #app;
  #name;
  #gender;
  #birthday;
  #hometown;
  #id;
  #password;

  constructor(app) {
    this.#app = app;
    this.#name = "";
    this.#gender = 0;
    this.#birthday = "";
    this.#hometown = "";
    this.id = "";
    this.#password = "";

    this.onChangeName();
    this.onChangeBirthDay();
    this.onChangeHometown();
    this.onChangeId();
    this.onChangePassword();

    this.onCheckFemale();
    this.onCheckMale();

    this.signup();
    this.goSignin();
  }

  onChangeName() {
    let input = this.#app.getElementById("name");
    input.addEventListener("change", (e) => {
      this.#name = e.target.value;
    });
  }

  onChangeBirthDay() {
    let input = this.#app.getElementById("birthday");
    input.addEventListener("change", (e) => {
      this.#birthday = e.target.value;
    });
  }

  onChangeHometown() {
    let input = this.#app.getElementById("hometown");
    input.addEventListener("change", (e) => {
      this.#hometown = e.target.value;
    });
  }

  onChangeId() {
    let input = this.#app.getElementById("id");
    input.addEventListener("change", (e) => {
      this.#id = e.target.value;
    });
  }

  onChangePassword() {
    let input = this.#app.getElementById("password");
    input.addEventListener("change", (e) => {
      this.#password = e.target.value;
    });
  }

  onCheckFemale() {
    let check = this.#app.getElementById("female");
    check.addEventListener("change", () => {
      this.#gender = 0;
    });
  }

  onCheckMale() {
    let check = this.#app.getElementById("male");
    check.addEventListener("change", () => {
      this.#gender = 1;
    });
  }

  signup() {
    let button = this.#app.getElementById("signup-button");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(
        "이름: " +
          this.#name +
          "\n성별: " +
          (this.#gender === 0 ? "여자" : "남자") +
          "\n생일: " +
          this.#birthday +
          "\n고향: " +
          this.#hometown +
          "\n아이디: " +
          this.#id +
          "\n비밀 번호: " +
          this.#password
      );
    });
  }

  goSignin() {
    let button = this.#app.getElementById("go-signin");
    button.addEventListener("click", (e) => {
      e.preventDefault();
      this.navigateTo("로그인 페이지");
    });
  }

  navigateTo(page) {
    console.log(`${page}로 이동합니다.`);
  }
}

new Signup(document);
