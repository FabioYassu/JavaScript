function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var frmAno = document.querySelector('input#txtAno')
    var anoValue = Number(frmAno.value)
    var res = document.querySelector('div#res')
 
    if(anoValue == 0 || anoValue >= ano) {
        window.alert(`[ERRO] O ano ${anoValue} é invalido. Verifique os dados e tente novamente`)

    }else{
        var frmGen = document.getElementsByName('rdoGen')
        var idade = ano - Number(frmAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (frmGen[0].checked) {
            genero = 'Homem'
            if (idade >= 1 && idade < 4 ){
                //Baby
                img.setAttribute('src', './img/babym.png')
            } else if (idade >= 3 && idade < 10 ){
                //Kid
                img.setAttribute('src', './img/kidm.png')
            } else if (idade >= 10 && idade < 21 ) {
                //Young
                img.setAttribute('src', './img/teenm.png')
            }else if (idade >= 21 && idade < 31 ) {
                //jovem adulto
                img.setAttribute('src', './img/jteenm.png')
            } else if (idade >= 31 && idade < 60 ) {
                //adulto
                img.setAttribute('src', './img/adultm.png')
            } else if (idade >= 60 && idade < 122) {
                //Old
                img.setAttribute('src', './img/oldm.png')
            } else {
                //Congratulation, It's hearth.
                img.setAttribute('src', './img/veryoldm.png')
            }
        } else if (frmGen[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4 ){
                //Baby
                img.setAttribute('src', './img/babyf.png')
            } else if (idade >= 3 && idade < 10 ){
                //Kid
                img.setAttribute('src', './img/kidf.png')
            } else if (idade >= 10 && idade < 21 ) {
                //Young
                img.setAttribute('src', './img/teenf.png')
            }else if (idade >= 21 && idade < 31 ) {
                //jovem adulto
                img.setAttribute('src', './img/jteenf.png')
            } else if (idade >= 31 && idade < 60 ) {
                //adulto
                img.setAttribute('src', './img/adultf.png')
            } else if (idade >= 60 && idade < 122) {
                //Old
                img.setAttribute('src', './img/oldf.png')
            } else {                
                //Congratulation, It's hearth.
                img.setAttribute('src', './img/veryoldf.png')
            }
        } 
        
        if (idade == 1){
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos: ${genero} com ${idade} ano de vida`
            res.appendChild(img)        
        } else {
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos: ${genero} com ${idade} anos de vida`
            res.appendChild(img)
        }
    }
}
