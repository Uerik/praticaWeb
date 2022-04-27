let resul = document.getElementById("resultado");
let entrada = document.getElementById("textoinput");

//button click (calcula a tabuada)
let btn = document.getElementById("calcular");
btn.addEventListener("click", function () {
  let count = 0;
  if (entrada.value != "") {
    resul.innerHTML = "";
  }
  if (entrada.value == "") {
    count = 11;
  }
  while (count <= 10) {
    let mult = entrada.value * count;
    resul.innerHTML += `<p>${entrada.value} X ${count} = ${mult} </p>`;
    count++;
  }
});
// button limpar (limpa a tela e volta para o começo)
let btn0 = document.getElementById("limpar");

btn0.addEventListener("click", function () {
  resul.innerHTML = "";
  entrada.value = "";
});
