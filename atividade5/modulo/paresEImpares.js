function paresEImpares(numeroInicial, numeroFinal, escolhaUsuario){
    let inicial = Number(numeroInicial)
    let final = Number(numeroFinal)
    let escolha = Number(escolhaUsuario)

    if(inicial==''){
        console.log('ERRO!! É necessária  aentrada de algum valor numérico')
    }else if(final>inicial){
        console.log('ERRO!! O número final deve ser maior que o inicial')
    }else if(final==inicial){
        console.log('ERRO!!  Não é permitido a entrada de dois valores iguais')
    }else{

    let contPar = 0
    let contImpar = 0

    if(escolha ==1 || escolha ==3){
        console.log('Números pares')
        for(;inicial <= final; inicial++){
            if(inicial%2==0){
                console.log(inicial)
                contPar++
            }
        }
        console.log('Quantidade de pares encontrados: ' +contPar)
    }

    if(escolha==2 || escolha==3){        
    inicial = Number(numeroInicial)
    console.log()
    console.log('Números ímpares')
    for(;inicial <= final; inicial++){
        if(inicial%2!=0){
            console.log(inicial)
            contImpar++
        }
    }
    console.log('Quantidade de ímpares encontrados: ' +contImpar)
}

}
}

module.exports ={
paresEImpares
}