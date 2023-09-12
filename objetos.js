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

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

var autoNuevo2 = new auto("Tesla", "Model X", 2018);

var autoNuevo3 = new auto("Toyota", "Carolla", 2020);

function solution(car) {
    car.licensePlate ? car.drivingLicense = true : car.drivingLicense = false;
    return car;
}

// Prueba 1
solution({
    color: 'red',
    brand: 'Kia',
});

// Prueba 2
solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
});

// Prueba 3
solution({ licensePlate: 'RGB255'  });