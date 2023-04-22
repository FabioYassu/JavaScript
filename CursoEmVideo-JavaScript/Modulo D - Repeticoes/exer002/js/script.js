function contar() {

    let frmValor = document.getElementById('frmValor')
    let valor = Number(frmValor.value)
    let tab = document.getElementById('slcTab')

    if(frmValor.value.length == 0 ){
        window.alert('Adicione um valor no formulario')
    } else {
        for (cont = 1; cont <= 10; cont++ ){ 
            let item = document.createElement('option')
            item.text = `${valor} x ${cont} = ${valor*cont}`
            tab.appendChild(item)
        
        }
    }
}