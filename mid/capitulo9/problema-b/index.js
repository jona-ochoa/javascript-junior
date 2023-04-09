alumnos= [
    {
        nombre: "Jonatan Ochoa",
        email: "soyjonatan@gmail.com",
        materia: "Fisica 3"
    },
    {
        nombre: "Karim Benzema",
        email: "karimbzm@gmail.com",
        materia: "Logica 4"
    },
    {
        nombre: "Lionel Messi",
        email: "liomessi@gmail.com",
        materia: "Ed Fisica 3"
    },
    {
        nombre: "Facundo Oreja",
        email: "facuoreja@gmail.com",
        materia: "Lengua"
    },
    {
        nombre: "Cofla Perez",
        email: "cofla@gmail.com",
        materia: "Recreo"
    }
];

const boton = document.querySelector('.btn-confirmar')

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"]
    let email = datos["email"]
    let materia = datos["materia"]
    let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
                <option value="Semana 3">Semana 3</option>
                <option value="Semana 4">Semana 4</option>
            </select>
        </div>
    `
    document.querySelector('.grid-container').innerHTML += htmlCode;
}

boton.addEventListener('click', ()=>{
    let confirmar = confirm('REalmente quieres confirmar mesas?')
    if(confirmar){
        document.body.removeChild(boton)
        let elementos = document.querySelectorAll('.semana');
        let semanasElegidas = document.querySelectorAll('.semana-elegida');
        for (elemento in elementos) {
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
   
})