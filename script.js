let loginbutton = document.querySelector(".login");
let Email = document.querySelector(".Email");
let password = document.querySelector(".password");
if (loginbutton) {
  loginbutton.addEventListener("click", () => {
    if (Email.value === "" || password.value === "") {
      alert("All fields must be filled");
    } else {
      alert("Login Successful!");
    }
  });
}

let signupbutton = document.querySelector(".signup");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let Password = document.querySelector(".Password");
let conformpassword = document.querySelector(".con_password");

if (signupbutton) {
  signupbutton.addEventListener("click", () => {
    if (
      name.value === "" ||
      email.value === "" ||
      Password.value === "" ||
      conformpassword.value === ""
    ) {
      alert("All fields must be filled");
    } else {
      alert("Login Successful!");
    }
  });
}
