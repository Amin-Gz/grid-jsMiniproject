// constants
const row = document.getElementById("rowV");
const col = document.getElementById("colV");
const btn = document.getElementById("DementionsBtn");
const boxParent = document.getElementById("boxParent");
const boxs = document.getElementById("boxParent").children;

// getting dementions values and putting them in dom
btn.addEventListener("click", () => {
  boxParent.innerHTML = "";
  boxParent.style.gridTemplateColumns = `repeat(${col.value}, ${1}fr)`;
  boxParent.style.gridTemplateRows = `repeat(${row.value}, ${1}fr)`;
  for (let i = 0; i < col.value * row.value; i++) {
    i % 2 === 1
      ? (boxParent.innerHTML += `<div class="section__container__boxs green"></div>`)
      : (boxParent.innerHTML += `<div class="section__container__boxs yellow"></div>`);
  }
  boxs[0].classList.add("hovBlue");
  boxs[boxs.length - 1].classList.add("hovRed");
});
