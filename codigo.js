// crear 
class Celulares {
    constructor(color, peso, rdp, rdc, ram){
        this.color =   color;
        this.peso  = peso;
        this.rdp  = rdp;
        this.rdc  = rdc;
        this.ram  = ram;
        this.encendido = false;
    };
    presionaBtn(){
        if (this.encendido == false){
            alert('Celular prendiendo');
            this.encendido = true
        } else {
            alert('El celular apagado')
        }
    };
    reiniciar(){
        if (this.encendido == true){
            alert('Reiniciando Celular');
        } else {
            alert('El celular ya esta apagado')
        }
    };
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarVideo(){
        alert(`Grabando video en ${this.rdc}`)
    }
}

celular1 = new celular("rojo", "150gr", "6'", "full HD", "2GB");

celular1.presionaBtn();
