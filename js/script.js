const buttons = document.querySelectorAll(".buttons");
const playersList = document.getElementById("players-list");
const messiBtn = document.getElementById("messi-btn");
const neymarBtn = document.getElementById("neymar-btn");
const bappeBtn = document.getElementById("bappe-btn");
const vitorBtn = document.getElementById("vitor-btn");
const renatorBtn = document.getElementById("renato-btn");
const sergioBtn = document.getElementById("sergio-btn");

function addPlayerName(btn, name) {
  const newList = document.createElement("li");
  newList.innerText = name;
  playersList.appendChild(newList);
  btn.disabled = true;
  btn.classList.add("disabled-btn");
}

messiBtn.addEventListener("click", function () {
  addPlayerName(messiBtn, "Lionel Messi");
});
neymarBtn.addEventListener("click", function () {
  addPlayerName(neymarBtn, "Neymar Jr");
});
bappeBtn.addEventListener("click", function () {
  addPlayerName(bappeBtn, "Kylian Mbappe");
});
vitorBtn.addEventListener("click", function () {
  addPlayerName(vitorBtn, "Vitor Machado");
});
renatorBtn.addEventListener("click", function () {
  addPlayerName(renatorBtn, "Renato Sanches");
});
sergioBtn.addEventListener("click", function () {
  addPlayerName(sergioBtn, "Sergio Ramos");
});
