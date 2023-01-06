let imga = document.getElementById("primeira");
imga.style.backgroundColor = "black";
let nome = document.getElementById("nome");
const nomes = ["Jisoo", "Lisa", "Rose", "Jennie"];

//display:block;
let count = 0;
// muda para a proxima imagem
function next() {
  galeria();
  count++;
  mais();
}
//volta para imagem anterior
function preview() {
  galeria();
  count--;
  menos();
}
// para na primeira imagem e nao volta ao contrario
function menos() {
  if (count <= 0) {
    count = 0;
  }
}
//para na ultima imagem e nao volta para a primeira
function mais() {
  if (count > 2) {
    count = 3;
  }
}
//imagem para para colocar no carrosel
function galeria() {
  if (count == 0) {
    jisoo = imga.src = "./img/jisoo.png";
    nome.innerHTML = nomes[0];
  }
  if (count == 1) {
    lisa = imga.src = "./img/lisa.jpeg";
    nome.innerHTML = nomes[1];
  }
  if (count == 2) {
    rose = imga.src = "./img/rose.jpeg";
    nome.innerHTML = nomes[2];
  }
  if (count == 3) {
    jennie = imga.src = "./img/jennier.jpg";
    nome.innerHTML = nomes[3];
  }
  return count;
}
