const readlineSync = require("readline-sync");
const jugadas = ["piedra", "papel", "tijera"];

function obtenerJugadaComputadora() {
    let jugada = Math.round(Math.random() * 2);
    switch (jugada) {

        case 0:
            jugada = jugadas[0];
            break;

        case 1:
            jugada = jugadas[1];
            break;

        case 2:
            jugada = jugadas[2];
            break;

    } return jugada;
}

function obtenerJugadaUsuario() {
    let jugada = readlineSync.question("Ingrese su eleccion: Piedra, Papel o Tijera:");
    jugada = jugada.toLowerCase();

    return jugada;
}

function determinarGanador(pc, jugador, cuenta) {


    if (
        (jugador == jugadas[0] && pc == jugadas[2]) ||
        (jugador == jugadas[1] && pc == jugadas[0]) ||
        (jugador == jugadas[2] && pc == jugadas[1])
        ) {
        console.log("La computadora eligio: %s. El usuario eligio: %s." +
            "El resultado fue: Gana el usuario.", pc, jugador);
        return cuenta - 1;
    }
    else if (
        (pc == jugadas[0] && jugador == jugadas[2]) ||
        (pc == jugadas[1] && jugador == jugadas[0]) ||
        (pc == jugadas[2] && jugador == jugadas[1])
    ) {
        console.log("La computadora eligio: %s. El usuario eligio: %s." +
            "El resultado fue:Gana la computadora", pc, jugador);
        return cuenta + 1;
    }
    else {
        console.log("La computadora eligio: %s. El usuario eligio: %s." +
            "El resultado fue:Empate.", pc, jugador);
        return cuenta;
    }

}

function ganador(cuenta) {
    if (cuenta < 0) {
        console.log("El ganador de la partida es: El Usuario.");
    } else if (cuenta > 0) {
        console.log("El ganador de la partida es: La Computadora.");
    } else {
        console.log("El resultado de la partida es: Empate.");
    }
}


function final() {
    let cantidadJugadas = fCantidadJugadas();
    let cuenta = 0;
    let ronda = 0;

    while (cantidadJugadas > 0) {
        ronda += 1;
        cantidadJugadas -= 1;
        console.log("Ronda " + ronda);
        let pc = obtenerJugadaComputadora();
        let jugador = obtenerJugadaUsuario();
        cuenta = determinarGanador(pc, jugador, cuenta);
    }
    ganador(cuenta)
}

final();

function fCantidadJugadas() {
    let cantidad = readlineSync.question("Ingrese la cantidad de rondas para ganar: 1, 2, 3.");
   switch (cantidad) {
        case "1":
            cantidad = 1;
            break;

        case "2":
            cantidad = 2;
            break;

        case "3":
            cantidad = 3;
            break;
    }
    return cantidad
}