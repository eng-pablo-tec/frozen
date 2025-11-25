let tela1 = document.querySelector(".tela1");
let tela2 = document.querySelector(".tela2");
let tela3 = document.querySelector(".tela3");
let botao_ganhou = document.querySelector(".botao_ganhou");
let vida = 100;

document.querySelector("#para_tela_2").onclick = function () {
  tela1.style.display = "none";
  tela2.style.display = "inline-block";
  tela3.style.display = "none";
};

document.querySelector("#life").innerHTML = vida;

document.querySelector("#soco").onclick = function () {
  vida = vida - 25;
  document.querySelector("#life").innerHTML = vida;
  if (vida <= 0) {
    botao_ganhou.style.display = "inline-block";
  }
  if (vida < 0) {
    vida = 0;
    document.querySelector("#life").innerHTML = vida;
  }
};

document.querySelector("#para_tela_3").onclick = function () {
  tela3.style.display = "inline-block";
  tela1.style.display = "none";
  tela2.style.display = "none";
};

document.querySelector("#para_tela_1").onclick = function () {
  tela1.style.display = "inline-block";
  tela2.style.display = "none";
  tela3.style.display = "none";
};
