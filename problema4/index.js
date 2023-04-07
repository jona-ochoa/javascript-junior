const obtenerInfo = (materia) => {
    const materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito", ],
        logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias]
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {
  let informacion = obtenerInfo(materia);

if(informacion !== false){
    let profesor = informacion[0][0]
    let alumnos = informacion[0]
    alumnos.shift()
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color:green'>${profesor}</b><br>
    Los alumnos son : <b style='color:red'>${alumnos}</b><br><br>`)
}
}

const asistencia = (alumno) => {
  let informacion =  obtenerInfo();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion) {
    if(informacion[info].includes(alumno)){
      cantidadTotal++;
      clasesPresentes.push(" " + info)
    }
  }
  return `<b style='color:blue'>${alumno}</b> esta en <b>${cantidadTotal}</b> clases <b style='color:green'>${clasesPresentes}</b><br><br>
  `;
}

mostrarInformacion("fisica")
mostrarInformacion("logica")
mostrarInformacion("programacion")
mostrarInformacion("quimica")

document.write(asistencia("cofla"))
document.write(asistencia("pedro"))
document.write(asistencia("maria"))
document.write(asistencia("juan"))
