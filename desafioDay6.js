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





function deletarItens(itenADeletar,grupoIten){
    for(var a = 0; a < grupoIten.length; a++){
        if (itenADeletar == grupoIten[a])
        var index = grupoIten.indexOf(itenADeletar)
            grupoIten.splice(index, 1);    
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


let continuaRemovendo = prompt("Deseja deletar algum iten?[1 sim / 2 nao]");
switch (continuaRemovendo){
    case "1":
        for(var c = 0; c < 100; c++){
            var itenRemovido = prompt("Qual iten deseja remover?");
            if(frutas.indexOf(itenRemovido) != -1){
                frutas.splice(frutas.indexOf(itenRemovido), 1);
            }
            if(laticinios.indexOf(itenRemovido) != -1){
                laticinios.splice(laticinios.indexOf(itenRemovido), 1);
            }
            if(higiene.indexOf(itenRemovido) != -1){
                higiene.splice(higiene.indexOf(itenRemovido), 1);
            }
            if(limpeza.indexOf(itenRemovido) != -1){
                limpeza.splice(limpeza.indexOf(itenRemovido), 1);
            }
            if(doces.indexOf(itenRemovido) != -1){
                doces.splice(doces.indexOf(itenRemovido), 1);
            }
            if(congelados.indexOf(itenRemovido) != -1){
                congelados.splice(congelados.indexOf(itenRemovido), 1);
            }
            continuaRemovendo = prompt("Deseja continuar removendo?[1 sim / 2 nao]");
            if(continuaRemovendo == "2"){
                c = 100;
            }
}
    case "2":
        break;
}
mostraLista();
