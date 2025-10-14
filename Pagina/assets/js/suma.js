const PromedioBtn = document.querySelector("#Promedio");

PromedioBtn.addEventListener("click", () => {
    let cantidadStr = prompt("¿Cuántos números quieres promediar?");
    let cantidad = parseInt(cantidadStr);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa un número válido y mayor que cero.");
        return;
    }

    let numeros = [];
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        let valorStr = prompt(`Ingresa el número ${i + 1}:`);
        let valor = parseFloat(valorStr);

        if (isNaN(valor)) {
            alert(`El valor "${valorStr}" no es un número válido. Intenta de nuevo.`);
            return;
        }
        numeros.push(valor);
        suma += valor;
    }

    let promedio = suma / cantidad;

    alert("El promedio de los números " + numeros.join(', ') + " es: " + promedio.toFixed(2));
});