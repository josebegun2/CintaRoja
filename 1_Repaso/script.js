/* 
Tipos de datos
Tipado


Tipos
string: Cadena de caracteres / palabra '' ""
number: Número (float, integer)
object: Objeto {}

*/

/* Hoisting */
/* ECMA Script 5*/


console.log(typeof numero) 

// Contexto GLobal: Scope
var numero = 1;

console.log(typeof numero) 

gritar();

function gritar () {
    console.log('Ahhhhh!', this)
}



/* ECMA Script 6*/
let nombreL = '';
nombreL = 'Jose';
nombreL = {};

const nonmbreC = '';
nombreC = 'Jose'

console.log(nombreL)
console.log(nombreC)