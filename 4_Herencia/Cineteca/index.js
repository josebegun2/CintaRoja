const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const cinemex = new Cine('Cinemex Reforma');

// reproducir el documental Cosmos
const documental = new Documental('Cowspiracy', 2015, 'Andrew', 'estadounidense', false);
// reproducir debe recibir un largometraje

console.log(cinemex.reproducir(documental))
// reproducir su película Favorita
const pelicula = new Pelicula('Gol', 2010, 'Bruno', 'Deporte', 100000000);
console.log(cinemex.reproducir(pelicula))
