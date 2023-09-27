/**************************************************************************
 * Objetivo: Cria um sistema gerenciador de tabuadas
 * Data: 20/09/23
 * Autor: Paloma Vessoleck
 * Versão 1.0
 **************************************************************************/

function calcularTabuada(tabuadaInicial,tabuadaFinal,contadorInicial,contadorFinal){
    let tabuada1 = Number(tabuadaInicial)
    let tabuada2 = Number(tabuadaFinal)
    let contador1 = Number(contadorInicial)
    let contador2 = Number(contadorFinal)


    for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
        console.log(`Tabuada do [${tabuada}]`);
    for(let contador = contador1; contador<=contador2; contador++){
        console.log(`${tabuada} x ${contador} = ${tabuada * contador1}`);
        }
    }
    
    }

    

    module.exports={
    calcularTabuada
    };