let materias = {
    fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "pepito", ],
    logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia]
    if(personas.length >= 21){
        document.write(`Lo siento <b style='color:blue'>${alumno}</b>, las clases de <b style='color:red'>${materia}</b> estan llenas<br><br>`)
    } else {
        personas.push(alumno);
        if(materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if(materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if(materia == "logica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }
        else if(materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`<b style='color:green'>Felicidades ${alumno}, te has inscrito a ${materia} correctamente.</b><br><br>`)
    }
}


document.write(materias['quimica'] + '<br>') 

inscribir("jose", "quimica",)
inscribir("ingrid", "quimica",)
inscribir("pepe", "quimica",)
inscribir("monge", "quimica",)
inscribir("messi", "quimica",)
inscribir("tarao", "quimica",)
inscribir("pupo", "quimica",)
inscribir("pito", "quimica",)
inscribir("pene", "quimica",)
inscribir("cara de pija", "quimica",)
inscribir("toro", "quimica",)
inscribir("martinez", "quimica",)
inscribir("jose", "quimica",)
inscribir("ingrid", "quimica",)
inscribir("pepe", "quimica",)
inscribir("monge", "quimica",)
inscribir("messi", "quimica",)
inscribir("tarao", "quimica",)
inscribir("pupo", "quimica",)
inscribir("pito", "quimica",)
inscribir("pene", "quimica",)
inscribir("cara de pija", "quimica",)
inscribir("toro", "quimica",)
inscribir("martinez", "quimica",)

document.write('<br>' + materias['quimica'])