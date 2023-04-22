
var now = new Date() 
var hora = now.getHours()
var min = now.getMinutes()

if(hora < 12 ) {
    console.log(`Bom Dia... Agora são ${hora}:${min}`)
    } else if(hora > 12 && hora < 18 ) { 
        console.log(`Boa Tarde... Agora são ${hora}:${min}`)
    } else {
        console.log(`Boa Noite... Agora são ${hora}:${min}`)
    }