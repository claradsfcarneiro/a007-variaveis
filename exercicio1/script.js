/*
const nome;
let idade;

console.log(`A variável nome é do tipo ${typeof nome}, já a variável idade é do tipo ${typeof idade}.`); // Nenhum tipo foi impresso pois não é possível definir uma const sem dar um valor à ela. Porém, nesse exemplo, tanto a varíavel nome quanto a variável idade são do tipo undefined.
*/

const nome = String(prompt("Qual é o seu nome?"));
let idade = Number(prompt("Qual é a sua idade?"));


console.log(`O valor da variável nome é igual a ${nome}, e essa variável é do tipo ${typeof nome}, já o valor da variável idade é igual a ${idade} e essa variável é do tipo ${typeof idade}.`); //o tipo das variáveis está sendo informado corretamente
console.log(`Olá ${nome}, você tem ${idade} anos.`);