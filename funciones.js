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

const saluda = function (nombre) {
    console.log(`Hola, ${nombre}`)
}

console.log(saluda("angel"))