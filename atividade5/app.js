var mostrarNumeros = require('./modulo/paresEImpares')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Insira o valor inicial: ', function(valorInicial){
    let inicial = valorInicial

    entradaDados.question('Insira o valor final: ', function(valorFinal){
        let final = valorFinal

        console.log()
        console.log('[1] Somente os pares [2] Somente os ímpares [3] Pares e ímpares')
        entradaDados.question('Selecione o número correspondente ao que deseja mostrar? ', function(escolhaUsuario){

            let escolha = escolhaUsuario

            mostrarNumeros.paresEImpares(valorInicial, valorFinal, escolhaUsuario)


            entradaDados.close()
        })
    })

})

        
   
   
   
   
   
