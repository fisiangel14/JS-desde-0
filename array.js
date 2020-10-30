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

// let amigos = ["Angel","Miguel","Fernando","Adriana","Luana"]

// // //estructura basica necesita una funcion anonima, con un parametro para recorrer todo el array
// // amigos.forEach(function(amigo){
// //     console.log(amigo)
// // })

// // //tanbien se puede escribir como una funcion flecha
// // amigos.forEach(amigo => console.log(amigo))

// // //si se guarda en una variable, nos da undifined
// // //no mdifica el el areglo la funcion flecha, solo sirve para recorrer y hacer operaciones con esos datos

// // let dato = amigos.forEach(amigo => console.log(`hola ${amigo}`))

// // console.log(amigos)
// // console.log(amigos)


// //map  --> tanbien recorre pero si se guarda en una varible se puede formar un nuevo array

// let dato = amigos.map(amigo => `hola ${amigo}`)
// console.log(amigos)
// console.log(dato)

// let numeros = [26,23,9,9,8,45,65,42,39,20]

// let arrayNuevo = numeros.filter(num => num<=20)

// console.log(arrayNuevo)
// console.log(numeros)

// let numeros = [26,23,9,9,8,45,65,42,100,39,20]

// //find --> devuelve un tipo de dato no un array y siempre devuevle el 1er dato
// let dato = numeros.find(num => num%2 ===1)

// console.log(dato)

// //include   -- devuelve un booleando si se encuentra o no en el array
// let dato1 = numeros.includes(23) 
// console.log(dato1)

// //some -- devuelve true o false si encuentra algun dato que cumpla la condicion
// let dato2 = numeros.some(num => typeof num === "string")
// console.log(dato2)

// //every -- todos los elementos deben cumplir la condiciom
// let dato3 = numeros.every(num =>typeof num === "number")
// console.log(dato3)

/**
 * Strings - funciones conocidas
//  */

// let texto = "Angel Eduardo Alegre Quispe"

// //slice -- recorta el array en el rango especificado
// let dato = texto.slice(1,10)
// console.log(dato)

// //split -- recortar el array segun el indicador que se le pase
// let dato1 = texto.split("e")
// console.log(dato1)

// //search -- pendiente
// //to
// let dato2 = texto.toLocaleLowerCase()
// console.log(dato2)

let alumno = {
    nombre: "Angel",
    apellido: "Alegre",
    edad:  26,
    suscriptor: false,
    ciudad: "LIMA"
}
//1ra forma de acceder a los valores
console.log(alumno.edad)
//2da forma de acceder a los valores
console.log(alumno["apellido"])

//obtener todos los valores
let valores = Object.values(alumno)
console.log(valores)

//obtener los atrivutos
let atributos = Object.keys(alumno)
console.log(atributos)