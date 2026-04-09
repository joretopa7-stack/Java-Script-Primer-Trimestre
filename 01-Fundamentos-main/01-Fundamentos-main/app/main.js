// construit un conversor dque reciba una entrada  (valor +  unidad de origen + unidad de destino)
// valida correctamente la entrada y devolver el valor formateado usa:

//const { useSyncExternalStore } = require("react")

// Temperatura: C, F, K
// Longitud: m, cm, km
// Peso: kg, g, lb

// Temperatura
//- C a F: (C * 9/5) + 32
//- C a K: C + 273.15
//- F a C: (F - 32) * 5/9
//- F a K: (F - 32) * 5/9 + 273.15
//- K a C: K - 273.15
//- K a F: (K - 273.15) * 9/5 + 32

// Longitud
//- m a cm: m * 100
//- m a km: m / 1000
//- cm a m: cm / 100
//- cm a km: cm / 100000
//- km a m: km * 1000
//- km a cm: km * 100000

// Peso
//- kg a g: kg * 1000
//- kg a lb: kg * 2.20462
//- g a kg: g / 1000
//- g a lb: g / 453.592
//- lb a kg: lb / 2.20462
//- lb a g: lb * 453.592
// Restricciones
// No usar librerias
//debes validar entradas y manejar errores de forma adecuada
//el programa no debe romperse ante entradas invalidas, 
 //sino que debe informar al usuario de manera clara y amigable sobre el error y cómo corregirlo.


// Solucion

function convertir(valor, origen, destino) {

    try {

        const numero = Number(valor);

        if (!Number.isFinite(numero)) {
            throw new Error("El valor ingresado no es un número válido.");
        }

        origen = origen.toLowerCase();
        destino = destino.toLowerCase();

        let resultado;

        // TEMPERATURA
        if (origen === "c" && destino === "f") resultado = (numero * 9/5) + 32;
        else if (origen === "c" && destino === "k") resultado = numero + 273.15;
        else if (origen === "f" && destino === "c") resultado = (numero - 32) * 5/9;
        else if (origen === "f" && destino === "k") resultado = (numero - 32) * 5/9 + 273.15;
        else if (origen === "k" && destino === "c") resultado = numero - 273.15;
        else if (origen === "k" && destino === "f") resultado = (numero - 273.15) * 9/5 + 32;

        // LONGITUD
        else if (origen === "m" && destino === "cm") resultado = numero * 100;
        else if (origen === "m" && destino === "km") resultado = numero / 1000;
        else if (origen === "cm" && destino === "m") resultado = numero / 100;
        else if (origen === "cm" && destino === "km") resultado = numero / 100000;
        else if (origen === "km" && destino === "m") resultado = numero * 1000;
        else if (origen === "km" && destino === "cm") resultado = numero * 100000;

        // PESO
        else if (origen === "kg" && destino === "g") resultado = numero * 1000;
        else if (origen === "kg" && destino === "lb") resultado = numero * 2.20462;
        else if (origen === "g" && destino === "kg") resultado = numero / 1000;
        else if (origen === "g" && destino === "lb") resultado = numero / 453.592;
        else if (origen === "lb" && destino === "kg") resultado = numero / 2.20462;
        else if (origen === "lb" && destino === "g") resultado = numero * 453.592;

        else {
            throw new Error("Las unidades ingresadas no son válidas.");
        }

        return `${numero} ${origen} = ${resultado.toFixed(2)} ${destino}`;

    } catch (error) {
        return `Error: ${error.message}`;
    }

}

// PRUEBAS

console.log(convertir(13, "C", "F",));
console.log(convertir(100, "kg", "lb"));
console.log(convertir(10000, "m", "km"));
console.log(convertir("abc", "m", "km"));