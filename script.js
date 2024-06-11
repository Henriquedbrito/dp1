//Exercício - 1
let valorIndefinido;
let valorVazio = "";
let valorPreenchido = "valor"

console.log(valorIndefinido);
console.log(valorVazio);
console.log(valorPreenchido);

//Exercício - 2
let numeroUm = 1;

// Utilizamos o "!=" para comparar se um valor é diferente de outro
if (numeroUm != 2){
    console.log("É um valor diferente de 2");
}else {
console.log("O valor não é diferente de 2");
}
// Utilizamos o "==" para comparar se um valor é igual o outro
if (numeroUm == 1){
    console.log("O valor è igual a 1");
}else{
    console.log("O valor não é igual a 1");
}
// Utilizamos o ">=" para comparar se um valor é maior ou igual o outro
 if (numeroUm >= 1){
    console.log("o valor é maior ou igual á 1");
}else{
    console.log("o valor não é maior ou igual a 1");
}

//Exercício - 3
let abaixoDoPeso = 18;
let pesoIdeal = 22;
let acimaDoPeso = 25;

function IMC(peso){
    if (peso < 18.5){
        console.log("abaixo do peso");
    }else if (peso <= 24.9){
        console.log("peso ideal");
    }else {
        console.log("acima do peso");
    }
}

IMC(abaixoDoPeso);
IMC(pesoIdeal);
IMC(acimaDoPeso);

//Exercício - 4
let  criança = 11;
let  adolescente = 15;
let  adulto = 22;
let  idoso = 61;

function faixaEtária(idade){
    if (idade <= 12){
        console.log("faixa etária: criança");
    }else if (idade <= 18){
        console.log("faixa etária: adolescente");
    }else if (idade <= 60){
        console.log("faixa etária: adulto");
    }else {
        console.log("faixa etária: idoso");
    }
}

faixaEtária(criança);
faixaEtária(adolescente);
faixaEtária(adulto);
faixaEtária(idoso);

//Exercício - 5
let cadastro = {
    nome : "admin";
    senha : 1234;
}

if (cadastro.senha == 1234){
    
}
//Exercício - 6
//Exercício - 7
//Exercício - 8
//Exercício - 9
