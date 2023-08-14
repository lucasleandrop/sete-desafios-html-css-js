function pulaLinha() {
  document.write("<br> </br>");
}

function mostra(frase) {
  document.write("<big>" + frase + "</big>");
  pulaLinha();
}

var numero = prompt("Deseja jogar para acertar um número de 0 até quanto?");
var quantiaDenumeros = parseInt(prompt("Deseja ter quantos números da sorte?"));

var numerosDaSorte = sorteia(numero);

function totalSegredos(quantiaDenumeros) {
  var segredos = [];
  var numero = 1;
  while (numero <= quantiaDenumeros) {
    var aleatorio = sorteia(numero);
    var achou = false;
    for (var c = 0; c < segredos.length; c++) {
      if (segredos[c] == aleatorio) {
        achou = true;
        break;
      }
    }
    if (achou == false) {
      segredos.push(aleatorio);
      numero++;
    }
  }

  return segredos;
}

var corretos = totalSegredos(quantiaDenumeros);

console.log(corretos);

function verifica() {
  var chute = prompt(`chute um número de 0 a ${numero}.`);
  for (var a = 0; a < corretos.length; a++) {
    var achou = false;
    if (chute == corretos[a]) {
      alert(`Parabéns você acertou o número da sorte era o ${corretos[a]}.`);
      achou = true;
      break;
    }
  }

  if (achou == false) {
    alert(`Você errou!`);
    achou = false;
  }
}

function sorteia(numero) {
  return Math.round(Math.random() * numero * 10);
}
verifica();
