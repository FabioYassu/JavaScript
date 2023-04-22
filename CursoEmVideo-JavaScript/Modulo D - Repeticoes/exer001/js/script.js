function contar() {

    let frmIni = document.querySelector('input#frmIni')    
    let frmFim = document.querySelector('input#frmFim')    
    let frmPasso = document.querySelector('input#frmPasso')    
    let msg = document.querySelector('div#msg')  
    let inicio = Number.parseInt(frmIni.value)
    let fim = Number.parseInt(frmFim.value)
    let passo = Number(frmPasso.value)    

    if (frmIni.value.length == 0 || frmFim.value.length == 0 || frmPasso.value.length == 0) {
        window.alert('Escolha um n° em todos formularios')        
    } else {
        msg.innerHTML = '<strong>Contando:</strong> '
        if (passo <= 0) {
            msg.innerHTML = '<strong>O valor 0 é inválido, considerando passo como 1.</strong></p>' 
            passo = 1
        }
        for (let res = inicio; res <= fim; res += passo) {            
            msg.innerHTML += ` &#129327 ${res} `
            }

        for(let res = inicio; res >= fim; res -= passo) {
            msg.innerHTML += ` &#128526 ${res} ` 
            }
        msg.innerHTML += `\u{1F4A5}`
        }         
}
