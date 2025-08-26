let readline = require ('readline-sync')

let nome = readline.question("Qual é o seu nome completo?")
let idade = readline.question("Qual é a sua idade?")
let animal = readline.question("voce tem algum animal de estimação? (sim/não)")
let quantidadeAnimal = 0
let tipoAnimal = ""
if (animal == "sim") {
    quantidadeAnimal = readline.question("Quantos animais de estimação você tem?")
    tipoAnimal = readline.question("Qual a espécie do seu animal de estimação?")
} else {
    animal = "Não possui animal de estimação"
}  

let cor = readline.question("Qual é a sua cor favorita?")
let comida = readline.question("Qual é a sua comida favorita?")
let musica = readline.question("Qual é a sua música favorita?")
let filme = readline.question("Qual é o seu filme favorito?")

console.log("------------------------------------Fórmulario de informações do úsuário------------------------------------")
console.log(`Nome completo: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Animal de estimação: ${animal}`)
if (quantidadeAnimal > 0) {
console.log(`Quantidade de animais de estimação: ${quantidadeAnimal}`)
console.log(`Espécie animal de estimação: ${tipoAnimal}`)
}
console.log(`Cor favorita:  ${cor}`)
console.log(`Comida favorita: ${comida}`)
console.log(`Música favorita: ${musica}`)
console.log(`Filme favorito: ${filme}`)
console.log("-----------------------------------------Obrigado pela colaboração------------------------------------------")    