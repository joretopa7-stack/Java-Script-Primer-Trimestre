console.log("Ejercicios JS");
/*1. Duplicar números con map
ObjeƟvo: pracƟcar transformación de arreglos.
Dado el arreglo:
const numeros = [2, 4, 6, 8, 10];
Crea un nuevo arreglo donde cada número esté mulƟplicado por 2.
Salida esperada:
[4, 8, 12, 16, 20]*/

console.log("1). DUPLICADO DE NUMEROS CON MAP.");
let nums1 = [2, 4, 6, 8, 10]; // arreglo original
let duplicado = nums1.map(nums1 => nums1 * 2); // multiplica cada número por 2
console.log(duplicado);
// Se usa map porque transforma cada elemento del arreglo

/*2. ConverƟr nombres a mayúsculas con map
ObjeƟvo: transformar cadenas de texto.
const nombres = ["ana", "luis", "marta", "pedro"];
Crea un nuevo arreglo con todos los nombres en mayúsculas. */

console.log("2). NOMBRES A MAYÚSCULAS.");
let nombres1 = ["ana", "luis", "marta", "pedro"];
let mayusculas = nombres1.map(nombres1 => nombres1.toUpperCase()); // convierte a mayúsculas
console.log(mayusculas);
// map transforma texto elemento por elemento

/*3. Obtener longitudes de palabras con map
ObjeƟvo: usar map con strings.
const palabras = ["sol", "computador", "mesa", "javascript"];
Genera un arreglo con la longitud de cada palabra.
Ejemplo esperado:
[3, 10, 4, 10]*/ 

console.log("3). LONGITUD DE PALABRAS");
let palabras1 = ["sol", "computador", "mesa", "javascript"];
let longitudes = palabras1.map(palabras1 => palabras1.length); // obtiene tamaño
console.log(longitudes);
// map sirve para transformar datos

/*4. Filtrar números pares con filter
ObjeƟvo: seleccionar elementos según condición.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Crea un nuevo arreglo solo con los números pares.*/ 

console.log("4). FILTRAR NUMEROS PARES");
let nums2 = [1,2,3,4,5,6,7,8,9,10];
let pares = nums2.filter(nums2 => nums2 % 2 === 0); // deja solo pares
console.log(pares);
// filter selecciona elementos que cumplen condición

/*5. Filtrar palabras largas con filter
ObjeƟvo: filtrar textos según su tamaño.
const palabras = ["casa", "ventana", "sol", "computadora", "luz"];
Obtén solo las palabras que tengan más de 5 letras.*/ 

console.log("5). PALABRAS LARGAS");
let palabras2 = ["casa", "ventana", "sol", "computadora", "luz"];
let largas = palabras2.filter(palabras2 => palabras2.length > 5);
console.log(largas);
// filter filtra según condición

/*6. Filtrar estudiantes aprobados con filter
ObjeƟvo: aplicar condiciones sobre objetos.
const estudiantes = [
 { nombre: "Ana", nota: 4.5 },
 { nombre: "Luis", nota: 2.8 },
 { nombre: "Marta", nota: 3.7 },
 { nombre: "Carlos", nota: 2.5 }
];
Obtén un nuevo arreglo con los estudiantes cuya nota sea mayor o igual a 3.0.*/

console.log("6). FILTRADO ESTUDIANTES");
let estudiantes = [
 { nombre: "Ana", nota: 4.5 },
 { nombre: "Luis", nota: 2.8 },
 { nombre: "Marta", nota: 3.7 },
 { nombre: "Carlos", nota: 2.5 }
];
let aprobados = estudiantes.filter(estudiantes => estudiantes.nota >= 3.0);
console.log(aprobados);
// filter se usa para condiciones

/*7. Sumar números con reduce
ObjeƟvo: acumular valores.
const numeros = [5, 10, 15, 20];
Usa reduce para obtener la suma total del arreglo.
Resultado esperado:
50*/

console.log("7). SUMA CON REDUCE");
let nums3 = [5, 10, 15, 20];
let suma = nums3.reduce((acc, nums3) => acc + nums3 , 0);
console.log(suma);
// reduce acumula valores

/*8. MulƟplicar todos los números con reduce
ObjeƟvo: pracƟcar acumuladores.
const numeros = [2, 3, 4];
Usa reduce para obtener el producto total.
Resultado esperado:
24*/

console.log("8). MULTIPLICAR NUMEROS");
let nums4 = [2, 3, 4];
let producto = nums4.reduce((acc, nums4) => acc * nums4, 1);
console.log(producto);
// reduce acumula multiplicando

/*9. Contar total de letras con reduce
ObjeƟvo: usar reduce con strings.
const palabras = ["hola", "mundo", "js"];
Calcula cuántas letras hay en total sumando la longitud de cada palabra.*/

console.log("9). TOTAL DE LETRAS");
let palabras3 = ["hola", "mundo", "js"];
let totalLetras = palabras3.reduce((acc, palabras3) => acc + palabras3.length, 0);
console.log(totalLetras);
// reduce suma valores

/*10. Ordenar números ascendentemente con sort
ObjeƟvo: ordenar valores numéricos.
const numeros = [45, 12, 78, 3, 19, 1];
Ordénalos de menor a mayor.*/

console.log("10). ORDEN ASCENDENTE");
let nums5 = [45, 12, 78, 3, 19, 1];
let ascendente = nums5.sort((M, m) => M - m);
console.log(ascendente);
// sort ordena

/*11. Ordenar números descendentemente con sort
ObjeƟvo: cambiar criterio de orden.
Usa el mismo arreglo anterior y ordénalo de mayor a menor.*/

console.log("10). ORDEN ASCENDENTE");
let nums6 = [45, 12, 78, 3, 19, 1];
let descendente = nums6.sort((M, m) => m - M);
console.log(descendente);
// sort con cambio de orden

/*12. Ordenar nombres alfabéƟcamente con sort
ObjeƟvo: ordenar texto.
const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
Ordénalos alfabéƟcamente.*/

console.log("12). ORDEN NOMBRES");
let nombres2 = ["Pedro", "Ana", "Luis", "Carlos", "Marta"]; //SE ORDENO ALFABETICAMENTE//
let ordenados = nombres2.sort();
console.log(ordenados);
// sort ordena texto

/*13. Ordenar productos por precio con sort
ObjeƟvo: ordenar objetos.
const productos = [
 { nombre: "Teclado", precio: 120000 },
 { nombre: "Mouse", precio: 50000 },
 { nombre: "Monitor", precio: 800000 },
 { nombre: "USB", precio: 30000 }
];
Ordénalos del más barato al más caro.*/

console.log("13). PRODUCTOS POR PRECIO");
let productos = [
 { nombre: "Teclado", precio: 120000 },
 { nombre: "Mouse", precio: 50000 },
 { nombre: "Monitor", precio: 800000 },
 { nombre: "USB", precio: 30000 }
];
let ordenPrecio = productos.sort((M, m) => M.precio - m.precio);
console.log(ordenPrecio);
// sort ordena objetos

/*14. Menú de día de la semana con switch
ObjeƟvo: tomar decisiones con múlƟples casos.
Solicita un número del 1 al 7 e imprime el día de la semana correspondiente:
 1 → Lunes
 2 → Martes
 3 → Miércoles
 4 → Jueves
 5 → Viernes
 6 → Sábado
 7 → Domingo
Si el número no está entre 1 y 7, mostrar: "Día no válido".*/

console.log("14). DIA DE LA SEMANA");

let dia = 7; // se puede cambiar para mirar otro caso

switch(dia){
 case 1: console.log("Lunes"); break;
 case 2: console.log("Martes"); break;
 case 3: console.log("Miércoles"); break;
 case 4: console.log("Jueves"); break;
 case 5: console.log("Viernes"); break;
 case 6: console.log("Sábado"); break;
 case 7: console.log("Domingo"); break;
 default: console.log("Día no válido");
}

// Se usa switch porque hay varias opciones fijas (1 al 7)


/*15. Clasificación de color con switch
ObjeƟvo: usar switch con texto.
Solicita un color y muestra un mensaje:
 "rojo" → "Color de alerta"
 "verde" → "Color de avance"
 "amarillo" → "Color de precaución"
 cualquier otro → "Color no reconocido"*/

console.log("15). CLASIFICACIÓN DE COLOR");

let color = "verde"; // se puede cambiar para probar otro caso 

switch(color){
 case "rojo": console.log("Color de alerta"); break;
 case "verde": console.log("Color de avance"); break;
 case "amarillo": console.log("Color de precaución"); break;
 default: console.log("Color no reconocido");
}
// Se usa switch porque se comparan valores específicos (texto)
 
/*16. Tabla del 5 con while
ObjeƟvo: repeƟr instrucciones con contador.
Usa un ciclo while para imprimir la tabla del 5 desde:
5 x 1 = 5
hasta:
5 x 10 = 50*/

console.log("16). TABLA DEL 5");
let n = 1;
while( n <= 10){
 console.log(`5 x ${n} = ${5 * n}`);
 n++;
}
// while repite

/*17. Contar del 10 al 1 con while
ObjeƟvo: pracƟcar decremento.
Usa while para mostrar una cuenta regresiva desde 10 hasta 1.
Al final imprime:
"¡Despegue!"*/

console.log("17). CUENTA REGRESIVA");
let c = 10;
while(c >= 1){
 console.log(c);
 c--;
};
console.log("¡Despegue!");
// while decrementa

/*18. Sumar números hasta llegar a 100 con while
ObjeƟvo: repeƟr hasta cumplir condición.
Crea un programa que vaya sumando números consecuƟvos comenzando en 1 hasta que la suma
sea mayor o igual a 100.
Debes mostrar:
 cada número sumado
 la suma final
 cuántos números fueron necesarios*/

console.log("18). SUMA HASTA 100");
let sumaTotal = 0;
let cantidad = 0;
let num = 1;
while(sumaTotal < 100){
 console.log(num);
 sumaTotal += num;
 cantidad++;
 num++;
}
console.log("SumaTotal=", sumaTotal);
console.log("Cantidad=", cantidad);
// while hasta cumplir condición

/*19. Ejercicio combinado: filter + map
ObjeƟvo: encadenar métodos.
const numeros = [3, 8, 15, 20, 7, 12, 1, 30];
1. Filtra solo los números mayores que 10.
2. Luego mulƟplícalos por 2.
Resultado esperado:
[30, 40, 24, 60]*/

console.log("19). FILTER + MAP");
let nums7 = [3, 8, 15, 20, 7, 12, 1, 30];
let resultado19 = nums7.filter(n => n > 10).map(n => n * 2);
console.log(resultado19);
// encadenamiento

/*20. Ejercicio integrador: filter + sort + map + reduce
ObjeƟvo: integrar varios métodos en un solo problema.
const ventas = [
 { producto: "Mouse", canƟdad: 3, precio: 50000 },
 { producto: "Teclado", canƟdad: 2, precio: 120000 },
 { producto: "Monitor", canƟdad: 1, precio: 800000 },
 { producto: "USB", canƟdad: 5, precio: 30000 }
];
Realiza lo siguiente:
1. Filtra los productos cuya canƟdad sea mayor o igual a 2.
2. Ordénalos de mayor a menor según el precio.
3. Crea un nuevo arreglo con frases como:
"Teclado - Total: 240000"
4. Calcula con reduce el valor total de todas las ventas.
Propuesta de reto extra
Para cada ejercicio:
 escriban el código
 comenten qué hace cada parte
 prueben con datos disƟntos
 expliquen en una frase por 
qué usaron ese método */

console.log("20). INTEGRADOR DE METODOS");
let ventas = [
 { producto: "Mouse", cantidad: 3, precio: 50000 },
 { producto: "Teclado", cantidad: 2, precio: 120000 },
 { producto: "Monitor", cantidad: 1, precio: 800000 },
 { producto: "USB", cantidad: 5, precio: 30000 }
];
let filtrados = ventas.filter(ventas => ventas.cantidad >= 2);
let ordenVentas = filtrados.sort((M, m) => m.precio - M.precio);
let frases = ordenVentas.map(v => `${v.producto} - Total: ${v.cantidad * v.precio}`);
console.log(frases);
let total = filtrados.reduce((acc, ventas) => acc + (ventas.cantidad * ventas.precio), 0);
console.log("Total de todas las ventas:");
console.log(total);
// combinación de métodos
