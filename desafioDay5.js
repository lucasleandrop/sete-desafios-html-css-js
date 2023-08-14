function pulaLinha(){
    document.write("<br> </br>");
}

function mostra (frase){
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var frutas = [];
var laticinios = [];
var higiene = [];
var limpeza = [];
var congelados = [];
var doces = [];

function listaDeCompras(){
    var comprarOuNao = prompt("Olá, você deseja adicionar um iten a sua lista de compras?[sim / nao]");
    if(comprarOuNao == "sim"){
        for(var c = 0; c < 100; c++){
        var item = prompt("Qual iten deseja adicionar à lista?");
        var qualTipoDoIten = prompt(`Qual categoria ${item} se encaixa?[congelados / doces / limpeza / higiene / laticinios / frutas]`);
            if(qualTipoDoIten == "congelados"){
            congelados.push(item);
             }
            if(qualTipoDoIten == "doces"){
            doces.push(item);
            }
            if(qualTipoDoIten == "limpeza"){
                limpeza.push(item);
            }
            if(qualTipoDoIten == "higiene"){
                higiene.push(item);
            }
            if(qualTipoDoIten == "laticinios"){
                laticinios.push(item);
            }
            if(qualTipoDoIten == "frutas"){
                frutas.push(item);
            }
            var continuar = prompt("Deseja adicionar mais itens?[sim / nao]");
            if(continuar == "nao"){
                c = 100;
                
            }
        }

    }
}
function mostraLista (){
mostra("<b>Sua lista de compras é :</b>");
mostra(`<b><u>frutas</b></u>: ${frutas}`);
mostra(`<b><u>laticinios</b></u>: ${laticinios}`);
mostra(`<b><u>higiene</b></u>: ${higiene}`);
mostra(`<b><u>limpeza</b></u>: ${limpeza}`);
mostra(`<b><u>doces</b></u>: ${doces}`);
mostra(`<b><u>congelados</b></u>: ${congelados}`);
}

mostra("<big> <b>" + "Desafio dia 5 : Lista de Compras." + "</b></big>");

listaDeCompras();
mostraLista();