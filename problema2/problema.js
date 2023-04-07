let cantidad = prompt('¿cuantos alumnos son?');
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt('nombre del alumno' + (i+1)),0]
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == 'p' || presencia == 'P') {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 3; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]} : <br>
    _____Presentes: <b> ${alumnosTotales[alumno][1]}</b> <br>
    _____Ausentes: <b> ${3 - parseInt(alumnosTotales[alumno][1])}</b>`;
    if (3 - alumnosTotales[alumno][1] >= 2) {
        resultado += "<b style='color:red'>Reprobado por inasistencias<b><br><br>"
    } else {
        resultado += '<br><br>'
    } document.write(resultado)
}