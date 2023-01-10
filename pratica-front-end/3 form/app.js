// cadastro
const cadNome = document.querySelector("#nome");
const cadLogin = document.querySelector("#cadLogin");
const cadSenha = document.querySelector("#cadSenha");
const cadBtn = document.querySelector("#cadBtn");
const cadContainer = document.querySelector("#cadastro");

// login
let login = document.getElementById("lname");
let password = document.getElementById("lpassword");
let btn = document.getElementById("btn");
let res = document.getElementById("resposta");
let loginContainer = document.querySelector("#login");
// loginContainer.style.display = "none";
cadContainer.style.display = "none";

function loginn() {
  loginContainer.style.display = "flex";
}

// cadastrando user no localstorage
cadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const meudb = localStorage;
  meudb.setItem("nome", cadNome.value);
  meudb.setItem("login", cadLogin.value);
  meudb.setItem("senha", cadSenha.value);
  cadContainer.style.display = "none";
  loginContainer.style.display = "flex";
});

// logando user com dados do localStorage
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const userLogin = localStorage.getItem("login");
  const userSenha = localStorage.getItem("senha");
  if ((userLogin == login.value) & (userSenha == password.value)) {
    res.textContent = "Bem Vindo! " + cadNome.value;
  } else {
    res.textContent = "User Invalido!";
  }
});

const btnCadastro = document.querySelector(".btnCadastro");

btnCadastro.addEventListener("click", () => {
  loginContainer.style.display = "none";
  cadContainer.style.display = "block";
  btnCadastro.style.display = "none";
});
