let nome  = prompt ("Adicione o nome")  
let nota1 = Number (prompt(`digite sua 1 nota da prova:`));
let nota2 = Number (prompt(`digite sua 2 nota da prova:`));
let media = (nota1 + nota2) / 2;
let problema = media >= 6 ? "Aprovado" : "Reprovado";
alert (`olá, ${nome}! sua média é ${problema}`);
