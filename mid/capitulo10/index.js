const enviar = document.getElementById('enviar')

enviar.addEventListener('click', ()=>{
    let resultado, mensaje;
    try {
    prevRes = parseInt(document.getElementById('nota').value);
    if(isNaN(prevRes)){
        throw "Gracioso"
    }

    resultado = verificarAprobacion(6, 6, prevRes);
    mensaje = definirMensaje(prevRes);

    }   catch (e){
        resultado = "SOS GRACIOSO?";
        mensaje = "He descubierto que intentaste hackear el sitio"
    }

    abrirModal(resultado, mensaje);

})

const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "Sos Malisimo para mi materia";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien";
        break;
        case 8: resultado = "Muy bien";
        break;
        case 9: resultado = "Excelente";
        break;
        case 10: resultado = "Destacado Felicidades!";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1, nota2, prevRes) => {
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 7){
        return "<span class='green'>APROVADO</span>"
    } 
    return "<span class='red'>DESAPROVADO</span>"
}

const abrirModal = (res, msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector('.modal-background')
    modal.style.animation = "aparecer 1s forwards"
    modal.style.display = "flex";
}