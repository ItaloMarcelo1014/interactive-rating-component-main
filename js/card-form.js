
// declaração das minhas variaveis gosta bastante de pega pelo id
const numero1 = document.getElementById('number1')
const numero2 = document.getElementById('number2')
const numero3 = document.getElementById('number3')
const numero4 = document.getElementById('number4')
const numero5 = document.getElementById('number5')
const meubutton = document.getElementById('btn-enviar')

// declaração das minhas variaveis gosta bastante de pega pelo id
let subresult = document.getElementById('your-selected')
 
// alguem poderia a mim ajudar para evitar a repetição de codigo que 
// esse ainda não e meu forte 


// valor dos inputs

numero1.addEventListener('click', function(){

 
   
    if(numero1){
        numero1.style.background = '#959eac'
        subresult.innerHTML = 'You selected  1 out of 5'
    }
})


numero2.addEventListener('click', function(){
  
   
    if(numero2){
        numero2.style.background = '#959eac'
        subresult.innerHTML = 'You selected  2 out of 5'
    }
})



numero3.addEventListener('click', function(){
   
   
    if(numero3){
        numero3.style.background = '#959eac'
        subresult.innerHTML = 'You selected  3 out of 5'
    }
})




numero4.addEventListener('click', function(){
    
    
    if(numero4){
        numero4.style.background = '#959eac'
        subresult.innerHTML = 'You selected  4 out of 5'
    }
})



numero5.addEventListener('click', function(){
   
    
    if(numero5){
        numero5.style.background = '#959eac'
        subresult.innerHTML = 'You selected  5 out of 5'
    }
})



// card 2 hidden

 document.getElementById("card2").style.visibility = "hidden"

 // botão de enviar para troca de card
 meubutton.addEventListener("click", function(){
    document.getElementById("card1").style.visibility = "hidden"
    document.getElementById("card2").style.visibility = "visible";
})
