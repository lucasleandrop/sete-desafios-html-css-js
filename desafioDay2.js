function pulaLinha(){
    document.write("<br> </br>");
}

function mostra (frase){
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

pulaLinha();
mostra("Dia 2 :");

var nome = prompt("Qual seu nome programador? ");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem você está estudando?")

mostra(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

var gosta = prompt(`Você gosta de estudar ${linguagem}? [1]S / [2]N`)
if(gosta == 1){
    mostra("Muito bom! Continue estudando e você terá muito sucesso.")
}
else{
    mostra("Ahh que pena... Já tentou aprender outras linguagens?")
}