var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours() 
var min = data.getMinutes()

msg.innerHTML = `Agora são <strong>${hora}:${min}</strong>`
if (hora >= 0 && hora < 12) {
    img.src = './img/manha.png'
    document.body.style.background = '#FDD99C'
} else if (hora >= 12 && hora < 18) {
    img.src = './img/tarde.png'
    document.body.style.background = '#FCAB36'
} else {
    img.src = './img/noite.png'
    document.body.style.background = '#2F4173'
}