var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500;
});

articulosFiltrados
[
    {nombre: 'Libro', costo: 320},
    {nombre: 'Teclado', costo: 500}
]

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
})

nombreArticulos
['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop";
});

encuentraArticulo
[{nombre: 'Laptop', costo: 20000}]

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});
//VM1128:2 Bici
//VM1128:2 TV
//VM1128:2 Libro
//VM1128:2 Celular
//VM1128:2 Laptop
//VM1128:2 Teclado
//VM1128:2 Audifonos

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;
})

articulosBaratos
true