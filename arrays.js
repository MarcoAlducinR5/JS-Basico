var frutas = ["manzana","platano","cereza","fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas[2]);

var masFrutas = frutas.push("uvas");

var ultimo = frutas.pop("uvas");

var nuevaLongitud = frutas.unshift("uvas");

var borrarFruta = frutas.shift("uvas");

var posicion = frutas.indexOf("cereza");

function solution(arraySecreto) {
    return typeof(arraySecreto[0]) === "string";
}
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])