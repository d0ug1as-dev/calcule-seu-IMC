const peso = document.getElementById('inputNumPeso')
const altura = document.getElementById('inputNumAltura')    
        
const btnEnviar = document.getElementById('btnEnviar')
const tagSection = document.getElementById('tagSection')

const menssagem = document.getElementById('menssagem')

let getPeso;
let getAltura;
let getOperacao;

const msnErro = "É preciso que digite os campos corretamente"
let msnResposta;

function getPesoAltura(){
        getPeso = Number.parseInt(peso.value)
        getAltura = Number.parseFloat(altura.value)
}
/* função que faz a operação de calculo do IMC */
function operacao(){
   let getOperacao = getPeso / (getAltura * getAltura)
    return getOperacao.toFixed(1)
}
/* validação que muda a cor da borda ao tira o foco do campo vazio */
function styleRed(numOpe){
    if(numOpe.value == "" || numOpe.value == 0){
        numOpe.style.border = "1px solid red"
    }else{
        numOpe.style.border = ""
    }
}
/* menssagem  de resposta no html */
function msm(getMsn, getColor){
    menssagem.innerText = getMsn
    menssagem.style.color= getColor
}
/* Validação de campos vazio */
function validacao(){
    if(peso.value !== "" && peso.value !== "0" && altura.value !== "" && altura.value !== "0"){
        getPesoAltura()
        operacao()
        msm(`Seu IMC é de: ${operacao()}`, 'white')
        menssagem.style.fontSize="1.5rem"
        getOperacao = operacao()
    }else{
        peso.value = ""
        altura.value = ""
        styleRed(peso)
        styleRed(altura)
        msm(msnErro, 'red')
        }
    }
/* validação que muda a cor da borda ao tira o foco do campo vazio */
peso.addEventListener('blur', function(){styleRed(peso)})
altura.addEventListener('blur', function(){styleRed(altura)})

btnEnviar.addEventListener("click", function(e){
    e.preventDefault()
    validacao()
})