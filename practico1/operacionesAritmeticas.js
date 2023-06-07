let var1 = 5 
let var2 = 6
let var3 = 8
let var4 = 4

let sumaVar = var1 + var2
let restarVar = var3 - var4

let resultadoFinal = sumaVar * restarVar

let esPar = [resultadoFinal].map(elemento => elemento % 2 === 0)

console.log = ("Mis variables iniciales fueron: " + var1 + "," + var2 + "," + var3 + " y " + var4 + 
". La respuesta a verificar si el resultado final es par es: " + esPar)
 