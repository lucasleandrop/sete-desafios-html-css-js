function pulaLinha(){
    document.write("<br> </br>");
}

function mostra (frase){
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

pulaLinha();
mostra("Dia 3 :");
var linguagens = [];
var nome = prompt("Olá programador, qual seu nome?");
var backOuFront = prompt(`${nome} você deseja seguir para a área de Back-end ou Front-end?[back / front]`);

if(backOuFront == "front"){
    linguagens.push(prompt("Você deseja aprender React ou Vue? [react / vue]"));
    let fullstack = prompt("Você deseja seguir se especializando na area ou ser um fullstack?[especializando / fullstack]");
    if(fullstack == "fullstack"){
        mostra(`Ótima escolha ${nome}, ser um fullstack lhe abrirá muitas oportunidades.`);
    }
    if(fullstack == "especializando"){
        for(var c = 0; c < 10; c++){
            linguagens.push(prompt("Você deseja aprender qual outra linguagem?"));
            let sOuN = prompt("Deseja continuar inserindo mais linguagens?[s/n]");
            if(sOuN == "n"){
                mostra(`Muito bem ${nome} boa sorte na sua jornada com as linguagens ${linguagens}.`);
                c = 10;
            }
        }
    }  
}
if(backOuFront == "back"){
    linguagens.push(prompt("Você deseja aprender c# ou Java? [c / java]"));
    let fullstack = prompt("Você deseja seguir se especializando na area ou ser um fullstack?[especializando / fullstack]");
    if(fullstack == "fullstack"){
        mostra(`Ótima escolha ${nome}, ser um fullstack lhe abrirá muitas oportunidades.`);
    }
    if(fullstack == "especializando"){
        for(var c = 0; c < 10; c++){
            linguagens.push(prompt("Você deseja aprender qual outra linguagem?"));
            let sOuN = prompt("Deseja continuar inserindo mais linguagens?[s/n]");
            if(sOuN == "n"){
                mostra(`Muito bem ${nome} boa sorte na sua jornada com as linguagens ${linguagens}.`);
                c = 10;
            }
        }
    } 
}  