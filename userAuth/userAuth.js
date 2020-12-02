const name = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const submit = document.querySelector("#submit");

let authInfo = {
  name: "",
  email: "",
  password: "",
  isLogedIn: false,
};

const onChange = (e) => {
  let input = e.target.name;
  const value = e.target.value;
  authInfo[input] = value;
};

name.addEventListener("change", onChange);
email.addEventListener("change", onChange);
pass.addEventListener("change", onChange);

submit.addEventListener("click", () => {
  if (!authInfo.name && !authInfo.email && !authInfo.password) {
    return alert("Please fill all value .");
  }
  alert(`
       name = ${authInfo.name}
       email = ${authInfo.email}
       password = ${authInfo.password}
      `);

  name.value = "";
  email.value = "";
  pass.value = "";
});
