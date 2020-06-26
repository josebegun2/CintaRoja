// aregar 1 metodo y 2 caracteristicas extras diferentes de las de largometraje y pelicula

const {
    Largo
} = require('./Largometraje')

class Documental extends Largo {
    constructor(titulo, anio, autor, ficticio, origen){
        super(titulo, anio, autor);
        this.origen = origen;
        this.ficticio = ficticio;
    }
    mensaje(){
        return 'Cuida el medio ambiente'
    }

}

module.exports = {
    Documental
}