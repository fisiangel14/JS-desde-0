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

function getAllName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

let nombreCompleto = getAllName("Angel Eduardo", "Alegre Quispe")

console.log(nombreCompleto)