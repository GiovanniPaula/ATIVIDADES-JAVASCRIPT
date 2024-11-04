let idades = [16, 48, 23, 22, 45, 8, 12];

let idadesMaioresDe18 = idades.filter(idade => idade >= 18);

console.log("Idades maiores ou iguais a 18:", idadesMaioresDe18);

idadesMaioresDe18.forEach(idade => {
    console.log(`Sua idade é: ${idade}`);
});
