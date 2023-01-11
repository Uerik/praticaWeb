// data
const tituloData = document.querySelector("#titulo-data");
const conteudoData = document.querySelector("#conteudo-data");
// hora
const tituloHora = document.querySelector("#titulo-hora");
const conteudoHora = document.querySelector("#conteudo-hora");

// função que cria e manipula data
const mees = () => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const dataCompleta = day + " " + months[month] + " " + year;
  tituloData.textContent = "Data";
  conteudoData.textContent = dataCompleta;
};
mees();

// função que cria manipula hora.
const hoora = () => {
  setInterval(() => {
    const d = new Date();
    const hora = d.getHours();
    const minuto = d.getMinutes();
    const segundo = d.getSeconds();
    const horaCompleta = hora + ":" + minuto + ":" + segundo;
    tituloHora.textContent = "Horas";
    conteudoHora.textContent = horaCompleta;
  }),
    1000;
};
hoora();
