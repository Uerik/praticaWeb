const para = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let count = 0;
  while (count <= 10) {
    para.innerHTML += count + "<br/>";
    count++;
  }
});
