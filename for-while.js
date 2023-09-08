var estudiantes = ["Maria","Sergio","Rosa","Daniel"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
for (var i=0; i<estudiantes; i++){
    saludarEstudiantes(estudiantes[i]);
}

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
while (estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

function solution(estudiantes, deathCount, nuevo) {
    if(deathCount>0){
        for (let i = 0; i < deathCount; i++) {
            estudiantes.pop();
        }
    }
        estudiantes.push(nuevo);
    return estudiantes;
}
    switch(deathCount>0){
        case true:
            for (let i = 0; i < deathCount; i++) {
                estudiantes.pop();
            }
            estudiantes.push(nuevo);
            return estudiantes;
        case false:
            estudiantes.push(nuevo);
            return estudiantes;
    }