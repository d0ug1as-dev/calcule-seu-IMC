const peso = document.getElementById('inputNumPeso')
const altura = document.getElementById('inputNumAltura')    
        
const btnEnviar = document.getElementById('btnEnviar')
const tagSection = document.getElementById('tester')

let getPeso;
let getAltura;
let getOperacao;

function pesoAltura(){
        getPeso = Number.parseInt(peso.value)
        getAltura = Number.parseFloat(altura.value)
}

function validacao(){
/* Validanco campos vazio */
if(peso.value !== "" && peso.value !== "0" && altura.value !== "" && altura.value !== "0"){
    pesoAltura()
    operacao()
}else{
        criaTag("É preciso que preencha os campos corretamente ")
    }
}

function criaTag(msmFinal){
    const tagP = document.createElement('p')
    tagP.textContent=`${msmFinal}`
    tagP.style.color='red'
    tagSection.appendChild(tagP)
}
function operacao(){
    getOperacao = getPeso / (getAltura * getAltura)
    console.log(getOperacao.toFixed(1))
}

peso.addEventListener('blur', function(){
    if(peso.value == "" || peso.value == 0){
        peso.style.border = "1px solid red"
    }else{
        peso.style.border = ""
    }
})
altura.addEventListener('blur', function(){
    if(altura.value == "" || altura.value == 0){
        altura.style.border = "1px solid red"
    }else{
        altura.style.border = ""
    }
})

btnEnviar.addEventListener('click', function(e){
    validacao()


    e.preventDefault()
})