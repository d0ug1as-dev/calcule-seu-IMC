const peso = document.getElementById('inputNumPeso')
const altura = document.getElementById('inputNumAltura')    
        
const btnEnviar = document.getElementById('btnEnviar')
const tagSection = document.getElementById('tester')

let getPeso;
let getAltura;

function pesoAltura(){
    /* Validanco campos vazio */
    if(peso.value !== "" && peso.value !== "0" && altura.value !== "" && altura.value !== "0"){
        getPeso = peso.value
        getAltura = altura.value
    }
    else{
        criaTag("É preciso que preencha os campos corretamente ")
    }
}

function criaTag(msmFinal){
    const tagP = document.createElement('p')
    tagP.textContent=`${msmFinal}`
    tagSection.appendChild(tagP)
}

btnEnviar.addEventListener('click', function(e){
    pesoAltura()


    e.preventDefault()
})