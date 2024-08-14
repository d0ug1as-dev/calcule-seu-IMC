const peso = document.getElementById('inputNumPeso')
const altura = document.getElementById('inputNumAltura')    
        
const btnEnviar = document.getElementById('btnEnviar')
const tagSection = document.getElementById('tagSection')
const getTabLinha = document.querySelectorAll('.getTabLinha')

const menssagem = document.getElementById('menssagem')

const linhasTabela = {
    baixoPeso: getTabLinha[0],
    pesoIdeal: getTabLinha[1],
    sobrePeso: getTabLinha[2],
    obsidade: getTabLinha[3],
    obesidadeGrave: getTabLinha[4],
    obsidadeMorbida: getTabLinha[5],
}
let getPeso;
let getAltura;
let getOperacao;
let validaAltua;

const msnErro = "É preciso que digite os campos corretamente"
let msnResposta;

function getPesoAltura(){
        validaAltua = altura.value
        getPeso = peso.value
        if(validaAltua.includes('.')){
            validaAltua = `${validaAltua.slice(0, 1)}${validaAltua.slice(1)}`
            getAltura = validaAltua
            return
        }
        if(!validaAltua.includes('.') && !validaAltua.includes(',')){
            validaAltua = `${validaAltua.slice(0, 1)}.${validaAltua.slice(1)}`
            getAltura = validaAltua
            return
        }
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
function validacaoCampo(){
    if(peso.value !== "" && peso.value >=1 && altura.value !== "" && altura.value >=1){
        operacao()
        getPesoAltura()
        getOperacao = operacao()
       if(getOperacao >=1){ 
        msm(`Seu IMC é de: ${operacao()}`, 'white')
        menssagem.style.fontSize="1.5rem"
        validacaoGrau()}
    }else{
        menssagem.style.fontSize="1rem"
        limpaCampos()
        styleRed(peso)
        styleRed(altura)
        msm(msnErro, 'red')
        }
    }
    function validacaoGrau(){
        if(getOperacao < 18.4){
            limpaCampos()
            linhasTabela.baixoPeso.style.border='1px solid red'
        }else if(getOperacao >= 18.5 && getOperacao <= 24.9){
            limpaCampos()
            linhasTabela.pesoIdeal.style.border='1px solid blue'
        }else if(getOperacao >= 25.0 && getOperacao <= 29.9){
            limpaCampos()
            linhasTabela.sobrePeso.style.border='1px solid red'
        }else if(getOperacao >= 30.0 && getOperacao <= 34.9){
            limpaCampos()
            linhasTabela.obsidade.style.border='1px solid red'
        }else if(getOperacao >= 35.0 && getOperacao <= 39.9){
            limpaCampos()
            linhasTabela.obesidadeGrave.style.border='1px solid red'
        }else if(getOperacao > 40){
            limpaCampos()
            linhasTabela.obsidadeMorbida.style.border='1px solid red'}
        }
        function limpaCampos(){
            peso.value = ""
            altura.value = ""
            linhasTabela.baixoPeso.style.border='1px solid white'
            linhasTabela.pesoIdeal.style.border='1px solid white'
            linhasTabela.sobrePeso.style.border='1px solid white'
            linhasTabela.obsidade.style.border='1px solid white'
            linhasTabela.obesidadeGrave.style.border='1px solid white'
            linhasTabela.obsidadeMorbida.style.border='1px solid white'
        }
/* validação que muda a cor da borda ao tira o foco do campo vazio */
peso.addEventListener('blur', function(){styleRed(peso)})
altura.addEventListener('blur', function(){styleRed(altura)})

btnEnviar.addEventListener("click", function(e){
    e.preventDefault()
    validacaoCampo()
})