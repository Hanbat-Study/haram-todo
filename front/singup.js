let name, gender, birthday, hometown, id, password;

let nameInput = document.getElementById("name");
let femaleChecked = document.getElementById("female");
let maleChecked = document.getElementById("male");
let birthdayInput = document.getElementById("birthday");
let hometownInput = document.getElementById("hometown");
let idInput = document.getElementById("id");
let passwordInput = document.getElementById("password");

nameInput.addEventListener("change", (e) => {
  name = e.target.value;
});
femaleChecked.addEventListener("change", (e) => {
  gender = 0;
});
maleChecked.addEventListener("change", (e) => {
  gender = 0;
});
birthdayInput.addEventListener("change", (e) => {
  birthday = e.target.value;
});
hometownInput.addEventListener("change", (e) => {
  hometown = e.target.value;
});
idInput.addEventListener("change", (e) => {
  id = e.target.value;
});
passwordInput.addEventListener("change", (e) => {
  password = e.target.value;
});

let signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", () => {
  event.preventDefault();
  console.log(
    "이름: " +
      name +
      "\n성별: " +
      (gender === 0 ? "여자" : "남자") +
      "\n생일: " +
      birthday +
      "\n고향: " +
      hometown +
      "\n아이디: " +
      id +
      "\n비밀 번호: " +
      password
  );
});

let goSigninButton = document.getElementById("go-signin");
goSigninButton.addEventListener("click", () => {
  event.preventDefault();
  console.log("로그인 페이지로 이동합니다.");
});