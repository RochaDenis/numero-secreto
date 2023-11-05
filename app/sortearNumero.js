
let numMin = 1;
let numMax = 100;
const elementoMenor = document.getElementById('menor-valor').innerHTML = numMin;
const elementoMaior = document.getElementById('maior-valor').innerHTML = numMax;

const numeroSecreto = numeroAleatorio();

function numeroAleatorio(){
    return parseInt(Math.random() * numMax + 1);
    
}
