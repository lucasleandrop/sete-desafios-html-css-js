function pulaLinha(){
    document.write("<br> </br>");
}

function mostra (frase){
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}



function multiplicacao(n1, n2){
    return Math.round(n1 * n2);
}
function divisao(n1, n2){
    return (n1 / n2).toFixed(2);
}
function soma(n1, n2) {
    return Math.round(n1 + n2);
}
function subtração(n1, n2) {
    return Math.round(n1 - n2);
}

function calculadora(){
   let calculadoraa = prompt("Selecione o que deseja calcular: [1] somar / [2] subtrair / [3] dividir / [4] multiplicar / [5] sair.");
   if(calculadoraa == "5"){
        mostra("Até a próxima!")
   }
    else{
        let n1 = parseInt(prompt("Qual o primeiro número?"));
        let n2 = parseInt(prompt("Qual o segundo número?"));
            switch (calculadoraa){
                case "1":
                    mostra(`A soma de ${n1} com ${n2} é : ${soma(n1, n2)}`);
                    break; 
                case "2":
                    mostra(`A subtração de ${n1} com ${n2} é : ${subtração(n1, n2)}`);
                    break; 
                case "3":
                    mostra(`A divisão de ${n1} por ${n2} é : ${divisao(n1, n2)}.`);
                    break; 
                case "4":
                    mostra(`A multiplicação de ${n1} por ${n2} é : ${multiplicacao(n1, n2)}.`);
                    break; 
            }
    }
}

mostra("Desafio dia 07 : calculadora.")
pulaLinha();
calculadora();