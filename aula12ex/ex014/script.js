function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

//variável hora
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12) {
    // DIA
    img.src = 'manha.png'
    document.body.style.background = '#e7b820'
}
else if (hora >= 12 && hora <= 18) {
    // TARDE
    img.src = 'tarde.jpg'
    document.body.style.background = '#be3501'
}
else {
    // NOITE
    img.src = 'noite.jpeg'
    document.body.style.background = '#062834'
}
}