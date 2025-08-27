//1

interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
    direccion: Direccion;
    mostrarInfo : () => string
}

const estudiante:Estudiante = { 
    nombre: 'Juan', 
    edad: 22, 
    curso: 'Matemáticas', 
    direccion: { 
        calle: 'Av. Siempre Viva', 
        ciudad: 'Bogotá', 
        pais: 'Colombia' 
    }, 
    mostrarInfo() { 
        return `${this.nombre} estudia ${this.curso} en 
${this.direccion.ciudad}`; 
    } 
}; 
 
console.log(estudiante.mostrarInfo());

//2

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle : () => string
}

const producto: Producto = { 
    id: 1, 
    nombre: 'Laptop', 
    precio: 3500, 
    stock: 10, 
    mostrarDetalle() { 
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} 
unidades disponibles`; 
    } 
}; 
 
console.log(producto.mostrarDetalle()); 

//3

interface Pelicula {
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir : () => string
}

const pelicula:Pelicula = { 
    titulo: 'Avengers: Endgame', 
    director: 'Anthony y Joe Russo', 
    duracion: 181, 
    genero: 'Acción', 
    reproducir() { 
        return `Reproduciendo: ${this.titulo} - Dirigida por 
${this.director}`; 
    } 
}; 
 
console.log(pelicula.reproducir()); 

//4

interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    encender : () => string
}

const vehiculo:Vehiculo = { 
    marca: 'Toyota', 
    modelo: 'Corolla', 
    anio: 2022, 
    encender() { 
        return `${this.marca} ${this.modelo} está encendido`; 
    } 
}; 
 
console.log(vehiculo.encender()); 

//5

interface Usuario {
    username: string;
    password: string;
    roles: string[];
    login : () => string
}

const usuario:Usuario = { 
    username: 'admin01', 
    password: '123456', 
    roles: ['admin', 'editor'], 
    login() { 
        return `Usuario ${this.username} ha iniciado sesión con roles: 
${this.roles.join(', ')}`; 
    } 
}; 
 
console.log(usuario.login()); 

// Segundo punto

let myValue: number | string | true = true; // No hay error

console.log(myValue)
 
let myBoolean: boolean = true;  // Boolean

console.log(myBoolean)

let healthPoints: number = 150;  //Se corrige el dato y se le quita las comillas para que sea numero y no cadena

console.log(healthPoints)
 
let otherMultipleDataType: number | boolean | "otraEtiqueta" = "otraEtiqueta"; // En la definicion no aparece "otraEtiqueta", ahora ya aparece

console.log(otherMultipleDataType)
 
let myVar: number | boolean | string | {};  //permitia cualquier tipo, ahora permite solo lo que se necesita
myVar = 123; 
myVar = true; 
myVar = "texto"; 
myVar = {};  

console.log(myVar)
 
const myConstant: number = 10; //no se le asigna valor

console.log(myConstant)

 
let inferedDataType: string | number = "Texto inicial"; //no tiene definido el tipo de dato string ni number
inferedDataType = 123;  

console.log(inferedDataType)
 
const isActive: boolean = true; // el 1 no es booleano

console.log(isActive)
 
let mixed: number | string | boolean = true;  // falta agregar el tipo booleano
 
console.log(mixed)

let whil: string = "Hola";  // while creo que es una palabra reservada para algo mas
 
console.log(whil)

let myNumber: number = 10; // se cambia numer a number
 
console.log(myNumber)

let numeros: number[] = [1, 2, 3]; //el array solo es de numeros y "3" es string

console.log(numeros)
 
let tupla: string [] = ["Hola"]; //los corchetes estraban mal puestos

console.log(tupla)
 
let otraTupla: (string | boolean)[] = [true, "Hola"]; // faltan parentesis, esta mal puesto el corchete y falta "|"

console.log(otraTupla)
 
let texto: string | null = "Hola mundo"; //falta definir los tipos
texto = null; 

console.log(texto)

let color: "rojo" | "verde" | "azul" | "amarillo" = "amarillo"; //el color amarillo no estaba

console.log(color)
 
let valor: any = 10; 

console.log(valor)

let version: number = 1.0; 
version = 2.0; 

console.log(version)

let persona = { nombre: "Ana", apellido: "Romo" }; 
persona.apellido = "Ruiz"; 

console.log(persona)

let edad: number | undefined = undefined;

console.log(edad)