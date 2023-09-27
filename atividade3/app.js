const calculoTabuada = require('./modulo/calcularTabuada')
const readline = require('readline')
const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Digite a tabuada inicial, sendo um valor entre 2 e 100:', function(tabuadaInicial){
    let tabuada1 = tabuadaInicial
        entradaDados.question('Digite a tabuada final, sendo um valor entre 2 e 100:', function(tabuadaFinal){
        let tabuada2 = tabuadaFinal
            entradaDados.question('Digite o contador inicial da tabuada, sendo um valor entre 1 e 50: ',function(contadorInicial){
                let contador1 = contadorInicial
                    entradaDados.question('Digite o contador final da tabuada, sendo um valor entre 1 e 50: ', function(contadorFinal){
                    let contador2 = contadorFinal 
                    if(tabuada1>100 || tabuada2>100 || tabuada1<2 || tabuada2<2){
                        console.log('ERRO!! Só é permitido a entrada de valores entre 2 e 100')
                        entradaDados.close
                    }else if(tabuada1=='' || tabuada2=='' || contador1=='' || contador2 == ''){
                        console.log('ERRO!! É obrigatório o preenchimento de todos os campos')
                        entradaDados.close
                    }else if(contador1>50 || contador1<1 || contador2>50 || contador2<1){
                        console.log('ERRO! Só é aceito valores entre 1 e 50')
                        entradaDados.close
                    }else{
                        calculoTabuada.calcularTabuada(tabuada1,tabuada2,contador1,contador2)
                        entradaDados.close
                    }




                    })
                })
            })
        })
    
    