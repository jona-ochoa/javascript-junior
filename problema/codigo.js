// Problema: preguntar edad, los menores no ingresan, y el que ingresa a las 2:00Hs tiene pase libre
let free = false;

const validateCliente = (time)=>{
    let edad = prompt('¿cual es tu edad?');
    if (edad >= 18){
        if (time >= 2 && time < 7 && free) {
            alert(`son las ${time}:00Hs ,Tiene un pase libre`);
            
        }else {
            alert(`son las ${time}:00Hs ,tiene que pagar la entrada para ingresar`)
        }
    } else {
        alert('no puedes ingresar eres menor de edad')
    }
}
validateCliente(23)
validateCliente(24)
validateCliente(23)
validateCliente(1)
validateCliente(2)
validateCliente(3)