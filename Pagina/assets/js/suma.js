const Promedio = document.querySelector("#Promedio");
const Dialogo = document.querySelector("#Dialogo");

Promedio.addEventListener("click", () => {
  // Pedir cuántos números se van a ingresar
let cantidad = parseInt(prompt("¿Cuántos números quieres promediar?"));
let numeros = [];
let suma = 0;

// Bucle para pedir cada número
for (let i = 0; i < cantidad; i++) {
    let valor = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    numeros.push(valor);      // guardamos en el arreglo
    suma += valor;            // sumamos al acumulador
}

// Calcular el promedio
let promedio = suma / cantidad;

// Mostrar el resultado
alert("El promedio es: " + promedio);
console.log("Números ingresados:", numeros);
console.log("Promedio:", promedio);

});