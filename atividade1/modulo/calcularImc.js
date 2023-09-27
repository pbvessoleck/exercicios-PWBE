function calcularImc (pesoUsuario, alturaUsuario){
    peso = Number(pesoUsuario)
    altura = Number(alturaUsuario)
    imc=peso / (altura * altura)
    return Number(imc)

}
    
    function classificarImc (imc){
        if(imc <= 18.5)
         return imc+  ' - você está abaixo do peso!'
       else if(imc>18.5 && imc<=24.9)
          return ' - você está com o peso normal!'
       else if(imc>=25 && imc<= 29.9)
           return' - você está acima do peso!'
       else if(imc>=30 && imc<=34.9)
           return ' - você está com obesidade I!'
       else if(imc>=35 && imc<=39.9)
           return ' - você está com obesidade II!'
       else if(imc>=40)
           return ' - você está com obesidade III!'

       }
       

    

    


module.exports ={
    calcularImc, classificarImc

};