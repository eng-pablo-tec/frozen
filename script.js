let tela1 = document.querySelector(".tela1");
let tela2 = document.querySelector(".tela2");
let tela3 = document.querySelector(".tela3");
let tela4 = document.querySelector(".tela4");
let tela5 = document.querySelector(".tela5");
let olaf1 = document.querySelector("#olaf1");
let olaf2 = document.querySelector("#olaf2");
let olaf3 = document.querySelector("#olaf3");
let olaf4 = document.querySelector("#olaf4");
let olaf5 = document.querySelector("#olaf5");
let olaf_coletado = 0;
document.querySelector("#para_tela_2").onclick = function () {
  tela1.style.display = "none";
  tela2.style.display = "inline-block";
  tela3.style.display = "none";
  tela4.style.display = "none";
  tela5.style.display = "none";
};
document.querySelector("#para_tela_3").onclick = function () {
  tela1.style.display = "none";
  tela2.style.display = "none";
  tela3.style.display = "inline-block";
  tela4.style.display = "none";
  tela5.style.display = "none";
};
document.querySelector("#para_tela_4").onclick = function () {
  tela1.style.display = "none";
  tela2.style.display = "none";
  tela3.style.display = "none";
  tela4.style.display = "inline-block";
  tela5.style.display = "none";
};
document.querySelector("#para_tela_5").onclick = function () {
  tela1.style.display = "none";
  tela2.style.display = "none";
  tela3.style.display = "none";
  tela4.style.display = "none";
  tela5.style.display = "inline-block";
};
document.querySelector("#olaf1").onclick = function () {
  olaf1.style.visibility = "hidden";
  olaf_coletado = olaf_coletado + 1;
  document.querySelector("#olaf_coletado").innerHTML = olaf_coletado;
};
document.querySelector("#olaf2").onclick = function () {
  olaf2.style.visibility = "hidden";
  olaf_coletado = olaf_coletado + 1;
  document.querySelector("#olaf_coletado").innerHTML = olaf_coletado;
};
document.querySelector("#olaf3").onclick = function () {
  olaf3.style.visibility = "hidden";
  olaf_coletado = olaf_coletado + 1;
  document.querySelector("#olaf_coletado").innerHTML = olaf_coletado;
};
document.querySelector("#olaf4").onclick = function () {
  olaf4.style.visibility = "hidden";
  olaf_coletado = olaf_coletado + 1;
  document.querySelector("#olaf_coletado").innerHTML = olaf_coletado;
};
document.querySelector("#olaf5").onclick = function () {
  olaf5.style.visibility = "hidden";
  olaf_coletado = olaf_coletado + 1;
  document.querySelector("#olaf_coletado").innerHTML = olaf_coletado;
};
document.querySelector("#olaf_coletado").innerHTML = olaf_coletado;
