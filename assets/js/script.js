// Selecionado o container que contém os botões
const buttons = document.getElementById("buttons")

// Selecionado a imagem
const img = document.getElementById("img")

// Variável para parar o intervalo das cores
let breakInterval 

// Variável para controlar o índice das cores
let indexColor = 0

// Adicionando evento nos botões
buttons.addEventListener("click", function (event) {
    stopAutomatic()
    turnOnTrafficLight[event.target.id]()
})

// Parando automático
const stopAutomatic = () => {
    clearInterval(breakInterval)
}

// Controlando cor automática
const controlAutomatic = () => {
    if(indexColor < 2) {
        ++ indexColor
    }
    else {
        indexColor = 0
    }
}

// Gerando cor automática
const automaticColor = () => {
    const colors = ["red", "yellow", "green"]
    const color = colors[indexColor]
    turnOnTrafficLight[color]()
    controlAutomatic()
}

// Ligando semáforo
const turnOnTrafficLight = {
    "red": () => img.src = "assets/img/vermelho.png", 
    "yellow": () => img.src = "assets/img/amarelo.png", 
    "green": () => img.src = "assets/img/verde.png",
    "automatic": () => breakInterval = setInterval(automaticColor, 1000)
}