// aregar 1 metodo y 2 caracteristicas extras diferentes de las de largometraje y documental

const {
    Largo
} = require('./Largometraje')

class Pelicula extends Largo {
    constructor(titulo, anio, autor, genero, presupuesto){
        super(titulo, anio, autor);
        this.genero = genero;
        this.presupuesto = presupuesto;
    }
    comerciales(){
        'Con la nueva Coca-Cola disfruta aún más tu película'
    }

}

module.exports = {
    Pelicula
}