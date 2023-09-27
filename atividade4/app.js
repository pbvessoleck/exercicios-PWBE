var fatorial = require('./modulo/calcularFatorial')
var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o número que deseja fatorar, sendo maior que 1: ', function(valorFatorialUsuario){
    valorFatorial = Number(valorFatorialUsuario)

    if(valorFatorial==0){
        console.log('ERRO!! Não existe fatorial de 0')
        entradaDados.close
    } else if(valorFatorial<=1){
        console.log('ERRO!! Não é possível calcular o fatorial de 1')
        entradaDados.close
    }else if(isNaN(valorFatorial)){
        console.log('ERRO!! Insira apenas número')
    }else{
        console.log(fatorial.calcularFatorial(valorFatorialUsuario))
        entradaDados.close
    }
})