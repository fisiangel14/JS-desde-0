/**
 * FUNCIONES - parametros
 */

 // declaracion de la funcion
function saludar(nombre) {
    if (typeof nombre === "string") {
        console.log(`Hola, ${nombre} muy buenos dias`)
    }else{
        console.log("Es incorrecto")
    }
    
}


// llamada a la funcion saludar
saludar("Angel")