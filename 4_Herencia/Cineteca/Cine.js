
class Cine {
    constructor(nombre) {
        this.nombre = nombre
    }
    reproducir(largometraje){
        const {titulo} = largometraje
        const {autor} = largometraje
        const {anio} = largometraje
        return `Gracias por visitar nuestro cine de ${this.nombre}, esperemos disfrutes del espectáculo que ${autor} nos ofrece dentro de ${titulo} del año ${anio}.`
    }
}

module.exports = {
    Cine,
}