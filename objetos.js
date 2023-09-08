var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

miAuto.modelo

miAuto.annio

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalleDelAuto();
