const btn = document.querySelector("button");
const titulo = document.querySelector("#nomeColor");
const corpo = document.body;

btn.addEventListener("click", () => {
  let randoM = Math.floor(Math.random() * 1000000);
  const color = "#" + randoM.toString();
  corpo.style.backgroundColor = color;
  titulo.textContent = color;
});
