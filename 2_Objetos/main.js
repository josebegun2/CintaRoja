// Definicion de objeto literal

const persona1 = {
    //clave: valor
    name: 'Jose',
    age: 23,
    isHuman: true,
    getAge() {
        return this.age;
    },
    setAge(newAge){
        this.age = newAge
    }
};

console.log(`Hola soy ${persona1.name} tengo ${persona1.getAge()} años.`)


const myPenguin = {
    character: 'Alfred',
    origin: 'Zig et Puce',
    creator: 'Alain Saint-Ogan', 
    notes: 'The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character'
}

console.log(`Hola soy un pingüino y mi nombre es ${myPenguin.character}`)

myPenguin.puedeVolar = false

myPenguin.graznar = function() {
    return 'kaw kaw'
}

myPenguin.graznar