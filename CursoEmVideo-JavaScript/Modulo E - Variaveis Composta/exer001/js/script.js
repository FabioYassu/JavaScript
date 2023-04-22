let frmNum = document.querySelector('input#frmNum')
let slcNum = document.querySelector('select#slcNum')
let msg = document.querySelector('div#msg')
let valores = [] 

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona() {
    if (isNumero(frmNum.value) && !inList(frmNum.value, valores)) {
        valores.push(Number(frmNum.value))
        let item = document.createElement('option')
        item.text = `Batata ${frmNum.value}`
        slcNum.appendChild(item)

    } else {
        window.alert('valor inválido')
    }
    frmNum.value = ' '
    frmNum.focus()
}

function analisar() {
    if (valores.length == 0) {
        window.alert('Batman')
    } else {
        let total = valores.length
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            
        }
        media = soma / total

        msg.innerHTML = ''
        msg.innerHTML +=  `<br><strong>Essa lista contém:</strong> ${total} valores cadastrados`
        msg.innerHTML += `<br>Menor número é : ${valores.sort()[0]}`
        msg.innerHTML += `<br>Maior número é : ${valores.sort().reverse()[0]}`
        msg.innerHTML += `<br>A soma dos valores é : ${soma}`
        msg.innerHTML += `<br>A soma dos valores é : ${media}`

    }   
}



