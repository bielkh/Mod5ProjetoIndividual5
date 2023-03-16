import readLineSync from 'readline-sync'

const propriedades = []
let input = ""

while(input != "sair"){

    propriedades.push(input)
    input = readLineSync.question(("Insira uma propriedade do CSS ")).toLocaleLowerCase()
}


console.log((propriedades.sort().join("\n"))) 