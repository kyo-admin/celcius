// 1.Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la
// transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente información respecto a la equivalencia de las
// escalas de temperatura:
// 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// es 0 °C + 273.15 = 273.15 K
// 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
// es (0 °C × 9/5) + 32 = 32 °F

var celcius = parseFloat(prompt("Ingrese los grados °Celcius a convertir"));
while(!Number.isInteger(celcius)){
  var celcius = parseFloat(prompt("Ingrese una cifra Valida para convertir los grados °Celcius"));
} 

let fahrenheit = ((celcius *9/5 )+32);
console.log("fahrenheit = "+fahrenheit);
let kelvin = (celcius + 273.15);
console.log("kelvin = "+ kelvin);

alert(`${celcius}°Celsius equivalen a ${fahrenheit}° fahrenheit y a ${kelvin}°kelvin`)
