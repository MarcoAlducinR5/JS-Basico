var edad = 18;
if(edad === 18){
    console.log("Puedes votar, sera tu primera votacion");
}
else if(edad > 18){
    console.log("Puedes votar de nuevo");
}
else if(edad > 18){
    console.log("Puedes votar de nuevo");
}
else if(edad > 18){
    console.log("Puedes votar de nuevo");
}
else if(edad > 18){
    console.log("Puedes votar de nuevo");
}
else{
    console.log("Aun no puedes votar");
}

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";

//variables: PublicKeyCredential, papel, otijera
//funcion de validacion de piedra papel y tijera
//llamar la funcion en el parametro

var piedra = 1;
var papel = 2;
var tijera = 3;

function validacionPPyT(usuario, cpu){
    if((usuario === piedra && cpu === piedra) || (usuario === papel && cpu === papel) || (usuario === tijera && cpu === tijera)){
        console.log("Empate");
    } else if (usuario === piedra && cpu === papel){
        console.log("gana cpu con papel")
    } else if (usuario === piedra && cpu === tijera){
        console.log("gana usuario con piedra");
    } else if (usuario === papel && cpu === tijera){
        console.log("gana cpu con tijera")
    } else if (usuario === papel && cpu === piedra){
        console.log("gana usuario con papel")
    } else if (usuario === tijera && cpu === piedra){
        console.log("gana cpu con piedra")
    } else if (usuario === tijera && cpu === papel){
        console.log("gana usuario con tijera")
    } 
}

