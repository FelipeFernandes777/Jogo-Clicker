let contador = 0;

let precoMaca = 10;

let precoBanana = 20;

let precoOvo = 35;

let qtdMaca = 0;

let qtdBanana = 0;

let qtdOvo = 0;

let precoUpgrade = 100;

let qtdUpgrade = 1;

function recarregar() {
  document.getElementById("contador").innerHTML = "Moedas: " + contador;
  document.getElementById("qtdMaca").innerHTML = "Quantidade Maçã: " + qtdMaca;
  document.getElementById("qtdBanana").innerHTML =
    "Quantidade Banana " + qtdBanana;
}

function semDinheiro() {
  document.getElementById("semDinheiro").style.display = "block";
}

function clicks() {
  contador = contador + qtdUpgrade;
  recarregar();
}

function validarDinheiro(contador, preco) {
  if (contador >= preco) {
    return true;
  } else {
    return false;
  }
}

function maca() {
  if (validarDinheiro(contador, precoMaca)) {
    contador = contador - precoMaca;
    qtdMaca++;
    implementarMoedas(1, 1000);
    recarregar();
  } else {
    semDinheiro();
  }
}

function banana() {
  if (validarDinheiro(contador, precoBanana)) {
    contador = contador - precoBanana;
    qtdBanana++;
    implementarMoedas(2, 1000);
    recarregar();
  } else {
    semDinheiro();
  }
}

function implementarMoedas(Quantidade, tempo) {
  setInterval(() => {
    contador = contador + Quantidade;
  }, tempo);
}

function upgrade() {
  if (validarDinheiro(contador, precoUpgrade)) {
    contador = contador - precoUpgrade;
    qtdUpgrade++;

    recarregar();
  } else {
    semDinheiro();
  }
}

setInterval(() => {
  recarregar();
}, 1000);

setInterval(() => {
  document.getElementById("semDinheiro").style.display = "none";
}, 3000);
