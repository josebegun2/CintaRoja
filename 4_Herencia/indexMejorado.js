class Animal {
    constructor(ojos, boca, extremidades){
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades = extremidades;
    }
    respirar(){
        console.log('snif')
    }
}

class Persona extends Animal{
    constructor(ojos, boca, extremidades,idioma) {
        super(ojos, boca, extremidades);
        this.idioma = idioma;
    }
    pensar(){
        console.log('Estoy pensando')
    }
    hablar(){
        console.log('Bla bla bla, palabrs, palabras, palabras')
    }
}

const persona = new Persona(2,1,4, 'español') 
console.log(persona)

// mascotas (perro y gato)
class Mascota {
    constructor(ojos, boca, extremidades, duenio){
        super(ojos, boca, extremidades);
        this.duenio = duenio;
        this.estaDomesticado = true;
    }
    respirar(){
        console.log('Respiro como mascota')
    }
}



const mascota = new Mascota(2,1,5,'Mali')
console.log(Mascota.respirar)