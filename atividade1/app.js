2/****************************************************************************
 * Objetivo: Fazer o cálculo do IMC de uma pessoa
 * Data: 13/09/2023
 * Autora: Paloma
 * Versão: 1.0
 *****************************************************************************/

var calculoImc = require('./modulo/calcularImc')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



entradaDados.question('Digite o seu peso: ', function(valorPeso){
    let peso = Number(valorPeso);

    entradaDados.question('Digite a sua altura: ', function(valorAltura){
        let altura = Number(valorAltura);

        if(peso == '' || altura == ''){
            console.log('ERRO!! Insira algum valor');
            entradaDados.close
        } else if(isNaN(altura) || isNaN(peso)){
            console.log('ERRO!! Digite apenas valores numéricos')
            entradaDados.close
        }else{
           const imc = calculoImc.calcularImc(valorPeso,valorAltura)
            const classificacao = calculoImc.classificarImc(imc)
            console.log('IMC: '+ `${imc}` + classificacao)
            entradaDados.close()
        }
    }
    )}
)
    
    
