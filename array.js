/**
 * ARRAY
 */

// let amigos = ["Angel","Miguel","Fernando","Adriana","Luana"]

// console.log(amigos)

// //agregar elementos al array

// amigos.push("Alomso")

// console.log(amigos)

// //para quitar 1 elemento
// amigos.pop()
// console.log(amigos)

// //para partir el arrary en 2, se debe guardar en una variable
// let dato = amigos.slice(0,2)
// console.log(dato)

/**
 * foreach
 */

let amigos = ["Angel","Miguel","Fernando","Adriana","Luana"]

//estructura basica necesita una funcion anonima, con un parametro para recorrer todo el array
amigos.forEach(function(amigo){
    console.log(amigo)
})

//tanbien se puede escribir como una funcion flecha
amigos.forEach(amigo => console.log(amigo))

//si se guarda en una variable, nos da undifined
//no mdifica el el areglo la funcion flecha, solo sirve para recorrer y hacer operaciones con esos datos

let dato = amigos.forEach(amigo => console.log(`hola ${amigo}`))

console.log(amigos)
console.log(amigos)