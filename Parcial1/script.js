menu = function(){
    this.location = "menu.html"
}

contactopag = function(){
    this.location = "contacto.html"
}

inicio = function(){
    this.location = "index.html"
}

detalles = function(){
    this.location = "detalles.html"
}
document.getElementById("menu").addEventListener("click", () => {
    menu()
})

document.getElementById("contactopag").addEventListener("click", () => {
    contactopag()
})

document.getElementById("inicio").addEventListener("click", () => {
    inicio()
})

document.getElementById("detallespag").addEventListener("click", () => {
    detalles()
})
