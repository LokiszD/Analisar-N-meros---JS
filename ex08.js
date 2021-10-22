let ntxt = window.document.querySelector('input#ntxt')
let tab = window.document.querySelector('select#tabela')
let restxt = window.document.querySelector('div#res')
let guardaNum = []

function verificaNum(n){ //verifica se numero esta entre 1 e 100

    if (n > 0 && n <= 100) {
        return true
    }else{
        return false
    }

}

function verificaNumIgual(n, l){ //verifica se tem numero igual adicionado (erro)

}

function addValor(){ //add valor no array

    if(verificaNum(Number(ntxt.value)) == true){
        tab.innerHTML = ''

        if (guardaNum.length < 10) {
            guardaNum.push(Number(ntxt.value)) //guarda numero digitado no array
            for(let i = 0; i<guardaNum.length; i++){ //loop para mostrar todos valores do array
                tab.innerHTML += `<option>Valor ${guardaNum[i]} adicionado</option>` //verificar se todos arrays foram colocados corretamente
            }
        }else{
            window.alert('Pode ser adicionado no máximo 10 números')
        }

        tab.innerHTML += `<option>Adicionados: ${guardaNum}</option>`
    }else{
        window.alert('[ERRO] Número inválido')
    }

}

function resposta(){

    let maiorVal = 0
    let menorVal = 101
    let somaVal = 0
    let mediaVal
    let aux

    for(let i = 0; i < guardaNum.length; i++){
        if (guardaNum[i] > maiorVal) {
            maiorVal = guardaNum[i]
        }
        if(guardaNum[i] < menorVal){
            menorVal = guardaNum[i]
        }

        somaVal += guardaNum[i]
    }

    mediaVal = somaVal / guardaNum.length

    restxt.innerHTML = `
    <p>Números cadastrados: ${guardaNum.length}</p>
    <p>Maior valor informado: ${maiorVal}</p>
    <p>Menor valor informado: ${menorVal}</p>
    <p>Soma de todos os valores: ${somaVal}</p>
    <p>Média de todos os valores: ${mediaVal}</p>
    `

}

function reset(){

    window.location.reload()

}