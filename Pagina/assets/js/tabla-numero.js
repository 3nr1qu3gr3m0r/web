const generarTablaBtn = document.querySelector("#generarTablaBtn");
const resultadoContainer = document.querySelector("#resultadoTabla");

generarTablaBtn.addEventListener("click", () => {
  let numeroStr = prompt("Ingresa el número del que quieres saber la tabla (del 0 al 10)");
  let numero = parseInt(numeroStr);

  resultadoContainer.innerHTML = '';

  if (isNaN(numero)) {
    resultadoContainer.innerHTML = '<p class="error">Entrada no válida. Por favor, ingresa un número.</p>';
    return;
  }

  let tablaHTML = `<h3>Tabla del ${numero}</h3><div class="tabla-grid">`;
  for (let i = 0; i <= 10; i++) {
    tablaHTML += `<div class="tabla-fila">${numero} &times; ${i} = <strong>${numero * i}</strong></div>`;
  }
  tablaHTML += '</div>';
  resultadoContainer.innerHTML = tablaHTML;
});