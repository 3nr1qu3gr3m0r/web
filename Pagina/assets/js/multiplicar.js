const boton = document.querySelector("#multiplicarBtn");
const resultadoContenedor = document.querySelector("#resultadoMultiplicacion");

boton.addEventListener("click", () => {
    const multiplo1Input = document.getElementById("multiplo1");
    const multiplo2Input = document.getElementById("multiplo2");

    let mul1 = parseFloat(multiplo1Input.value);
    let mul2 = parseInt(multiplo2Input.value);

    resultadoContenedor.innerHTML = ''; 

    if (isNaN(mul1)) {
        resultadoContenedor.innerHTML = '<p class="error">El primer número no es válido.</p>';
        return;
    }
    if (isNaN(mul2) || mul2 < 0) {
        resultadoContenedor.innerHTML = '<p class="error">El segundo número debe ser un entero no negativo.</p>';
        return;
    }

    let resultado = 0;
    let procesoHTML = `<h3>Proceso de Suma: ${mul1} &times; ${mul2}</h3><div class="proceso-grid">`;

    if (mul2 === 0) {
        procesoHTML += `<div class="proceso-fila">Cualquier número multiplicado por 0 es 0.</div>`;
    } else {
        for (let i = 1; i <= mul2; i++) {
            let sumaAnterior = resultado;
            resultado = resultado + mul1;
            procesoHTML += `<div class="proceso-fila">Suma ${i}: ${sumaAnterior.toFixed(2)} + ${mul1} = <strong>${resultado.toFixed(2)}</strong></div>`;
        }
    }

    procesoHTML += `</div><p class="resultado-final">Resultado Final: ${resultado.toFixed(2)}</p>`;
    resultadoContenedor.innerHTML = procesoHTML;
});