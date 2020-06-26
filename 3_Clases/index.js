// Objeto literal

const carro = {
    color: 'rojo',
    velocidad: 30,
    ruedas: 4,
    motor: 'V6',
    arranca() {
        console.log('run run')
    },
    frena() {
        console.log('iiiii')
    },
    dobla() {
        console.log('el carro está doblando')
    }
}

// Clase
// tener la palabra reservada class

class Carro {
    constructor(duenio, color, velocidad, ruedas, motor, tipoRueda) {
        // inicializar variables
        this.duenio = duenio
        this.color = color;
        this.velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
        this.tipoRueda = tipoRueda
        this.vendido = false;
    };
    arranca() {
        // evaluando que this.vendido sea igual con true
        if (this.vendido) {
            console.log(`El carro de ${this.duenio} hace run run`)
        } else {
            console.log(`El carro de ${this.duenio} no hace run run porque no esta pagado`)
        }
        return true
    };
    frena() {
        console.log('iiiii')
    };
    dobla() {
        console.log('el carro está doblando')
    };
}

class Rueda {
    constructor(rin, rodada) {
        // inicializar variables
        this.rin = rin,
            this.rodada = rodada
    }
}

// Carro.constructor()
const carro1 = new Carro('Jose', 'rojo', 30, 4, 'V4', new Rueda('aluminio', 32))
const carro2 = new Carro('Daniel', 'rojo', 30, 4, 'V4', new Rueda('aluminio', 32))


carro2.vendido = true

console.log(carro1)
console.log(carro2)
carro1.arranca()
carro2.arranca()


class Persona {
    constructor(nombre, apellidomat, apellidopat, year, month, day, sexo, peso, altura) {
        this.nombre = nombre;
        this.apellidomat = apellidomat;
        this.apellidopat = apellidopat;
        this.year = year;
        this.month = month;
        this.day = day;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;

    }

    getAge() {
        //diferencia de fecha de nacimiento al dia de hoy
        return Date.now() - new Date(this.year, this.month, this.day)
    }

    generarRFC() {
        return `${this.apellidomat.charAt(0)}${this.apellidopat.charAt(0)}${this.nombre.charAt(0)}${this.year}${this.month}${this.day}`
    }

    calcularIMC() {
        return this.peso / (estatura * estatura)
    }
    esMayorEdad() {
        if (edad > 17) {
            return true
        } else {
            return false
        }
    }

}

const persona1 = new Persona('Jose', 'Beg', 'Jaf', 1990, 10, 10, 'Male', 80, 180)
console.log(persona1.getAge())
console.log(persona1.generarRFC())




class Cuenta {
    constructor(titular, cantidad, estado) {
        this.titular = titular;
        this.cantidad = cantidad;
        this.estado = estado;
    }

    ingresar(amount) {
        if (this.cantidad > 900) {
            return 'No puedes agregar mas dinero'
        } else {
            this.cantidad = this.cantidad + amount
        }
    }

    retirar(amount) {
        if (this.cantidad < 10) {
            return 'No puedes retirar dinero'
        } else {
            this.cantidad = this.cantidad - amount
        }
    }
}

const cuenta2 = new Cuenta('Jose', 500, 'Abierta')
console.log(cuenta2)
console.log(cuenta2.ingresar(200))