personas = ["Jose","Maria","Andres","Lionel","Sofia","Leandro","Emilia"];
let rechazados = [];
let admitidos = [];

for (let i = 0 ; i < personas.length ; i++) { 

    if (personas[i] === "Jose" || personas [i] === "Sofia") {
       rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
}

console.log("La lista de invitados admitidos es: ")
for (let i = 0 ; i < admitidos.length ; i++) {
     console.log(admitidos[i]);
} 

console.log("La lista de invitados rechazados es: ")
for ( let i = 0 ; i < rechazados.length ; i++) {
    console.log(rechazados[i]);
}

let ordenadaAdmitidos = [];

ordenadaAdmitidos = admitidos.sort();
console.log("La lista ordenada de invitados admitidos es: ");
for(i = 0 ; i < ordenadaAdmitidos.length ; i++) {
    console.log(ordenadaAdmitidos[i]);
}

let ordenadaRechazados = [];

ordenadaRechazados = rechazados.sort();
console.log("La lista ordenada de invitados rechazados es: ");
for(i = 0 ; i < rechazados.length ; i++) {
    console.log(rechazados[i]);
}
