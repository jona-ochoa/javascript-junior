
const contenedor = document.querySelector('.seleccionado')
const input = document.querySelector('.input-prueba')

input.addEventListener('select', (e) => {
    
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value;
    contenedor.innerHTML = textoCompleto.substring(start, end)
})


input.addEventListener('keyup', (e) => {
    let tecla = e.key;
    nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`
    contenedor.innerHTML = nuevoContenido;
})



