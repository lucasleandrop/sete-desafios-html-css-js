function pulaLinha(){
    document.write("<br> </br>");
}

function mostra (frase){
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

mostra("Dia 1 :")
if(numeroUm == stringUm){
    mostra(`As variáveis ${numeroUm} e ${stringUm} tem o mesmo valor, mas tipos diferentes`);
}
else{
    mostra(`As variáveis ${numeroUm} e ${stringUm} não tem o mesmo valor`);
}

if(numeroDez == stringDez){
    mostra(`As variáveis ${numeroDez} e ${stringDez} tem o mesmo valor, mas tipos diferentes`);
}
else{
    mostra(`As variáveis ${numeroDez} e ${stringDez} não tem o mesmo valor`);
}

if(numeroTrinta === stringTrinta){
    mostra(`As variáveis ${numeroTrinta} e ${stringTrinta} tem o mesmo valor e mesmo tipo`);
}
else{
    mostra(`As variáveis ${numeroTrinta} e ${stringTrinta} não tem o mesmo tipo`);
}