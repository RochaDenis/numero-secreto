function verificandoSeOChutePossuiUmValorValido(chute){
    let numero = +chute
    
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div><i class="fa-solid fa-face-sad-cry"></i> Valor inválido</div>';
        return 
    }
   if(chute < numMin || chute > numMax){
        elementoChute.innerHTML += '<div><i class="fa-solid fa-face-sad-cry"></i> Valor inválido</div>';
        return 
   }

   if(numero == numeroSecreto){
    document.body.innerHTML = `<h2><i class="fa-solid fa-face-smile-wink"></i> Você Acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
   } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>o numero secreto é maior <i class="fa-solid fa-angles-up"></i></div>`;
   } else {
    elementoChute.innerHTML += `<div>o numero secreto é menor <i class="fa-solid fa-angles-down"></i></div>`
   }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e =>{
    if(e.target.id =='jogar-novamente'){
        window.location.reload();
    }
})