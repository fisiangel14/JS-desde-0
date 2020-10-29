/**
 * FUNCIONES - parametros
 */

 // declaracion de la funcion
// function saludar(nombre) {
//     if (typeof nombre === "string") {
//         console.log(`Hola, ${nombre} muy buenos dias`)
//     }else{
//         console.log("Es incorrecto")
//     }
    
// }


// // llamada a la funcion saludar
// saludar("Angel")

/**FUNCION CON RETORNO
 * 
 */

// function getAllName(firstName, lastName) {
//     return `${firstName} ${lastName}`
// }

// let nombreCompleto = getAllName("Angel Eduardo", "Alegre Quispe")

// console.log(nombreCompleto)

/**
//  * FUCNION ANONIMA
//  */

// let sumar = function (a,b,c) {
//     return a + b + c    
// }

// let resultado = sumar(2,3,4)
// console.log(resultado)

// /**
//  * FUNCION AUTOLLAMADA
//  */
// (function (a,b,c) {
//     console.log(a+b+c)
// }(2,3,4))

/**
 * FUNCIONES CON CONSTANTES
 * la funciones debe declararse con const y no con let
 */

// const saluda = function (nombre) {
//     console.log(`Hola, ${nombre}`)
// }

// console.log(saluda("angel"))

/**
 * SCOPE  --> ES EL ALCANCE DE LAS VARIBALES EN TODO EL CODIGO
 */


/**
 * FUNCIONES FLECHA
 * 
 *     =>
 */
// con mas de 2 paremtros entre parantesis
const suma = (a,b) => a+b

console.log(suma(5,4))

//con 1 solo parametro se pueden uitar
const saludar = nombre => `Hola ${nombre}, how are you`

console.log(saludar("Angel"))

const fin = () => console.log(`Se acabo el curso de JS`)
fin()