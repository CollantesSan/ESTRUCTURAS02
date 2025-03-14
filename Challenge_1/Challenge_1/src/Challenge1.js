/*
📌 Diferencias clave:
this en Arrow Functions

En las funciones regulares, this cambia dependiendo de cómo se llame la función.
En las Arrow Functions, this se mantiene igual al contexto en el que se definió.
arguments en Arrow Functions

Las funciones regulares tienen acceso a arguments, un objeto con todos los parámetros recibidos.
Las Arrow Functions no tienen arguments, pero puedes usar el operador rest (...args) en su lugar.
Uso de return

Si la Arrow Function tiene una sola expresión, se puede omitir {} y el return.

*/

// Función Regular
function verificarParidad(num) {
    if (num % 2 === 0) {
        console.log(`${num} es un número par`);
    } else {
        console.log(`${num} es un número impar`);
    }
}

// Arrow Function
const verificarParidadArrow = (num) => {
    console.log(`${num} es ${num % 2 === 0 ? 'par' : 'impar'}`);
};

// Pruebas
verificarParidad(10);       // Salida: 10 es un número par
verificarParidadArrow(15);  // Salida: 15 es impar


/*
📌 Diferencia en la sintaxis:

La función regular usa function nombre(...) {...}
La Arrow Function usa const nombre = (...) => {...}
*/