
const intervalo = setInterval(() => {
    document.write("Hola, ")
}, 1125)

setTimeout(() => {
    clearInterval(intervalo)
}, 11100)