var numero = 1;
switch(numero){
    case 1: 
        console.log("soy uno");
        break;
    case 10:
        console.log("Soy diez!");
        break;
    case 100:
        console.log("Soy cien!");
        break;
    default:
        console.log("No soy nada");
        break;
}

var piedra = 1;
var papel = 2;
var tijera = 3;

function validacionPPyT(usuario, cpu){
    switch(usuario>tijera || cpu > tijera || usuario === 0 || cpu === 0){
        case true:
            console.log("Argumentos no validos");
        break;
        case false:
            switch(usuario == cpu){
                case true:
                    console.log("Empate");
                break;
                case false:
                    switch(usuario === piedra && cpu === papel){
                        case true:
                            console.log("gana cpu con papel");
                        break;
                    }
                    switch(usuario === piedra && cpu === tijera){
                        case true:
                            console.log("gana usuario con piedra");
                        break;
                    }
                    switch(usuario === papel && cpu === tijera){
                        case true:
                            console.log("gana cpu con tijera");
                        break;
                    }
                    switch(usuario === papel && cpu === piedra){
                        case true:
                            console.log("gana usuario con papel");
                        break;
                    }
                    switch(usuario === tijera && cpu === piedra){
                        case true:
                            console.log("gana cpu con piedra");
                        break;
                    }
                    switch(usuario === tijera && cpu === papel){
                        case true:
                            console.log("gana usuario con tijera");
                        break;
                    }
                break;
            }
        break;
    }
}

function solution(dato) {
    var regreso;
    switch(dato){
        case "computadora":
            regreso = "Con mi computadora puedo programar usando JavaScript";
        break;
        case "celular":
            regreso = "En mi celular puedo aprender usando la app de Platzi";
        break;
        case "cable":
            regreso = "¡Hay un cable en mi bota!";
        break;
        default:
            regreso = "Artículo no encontrado";
        break
    }
    return regreso;
}