const generarBtn = document.getElementById('generarVectoresBtn');
const sumarBtn = document.getElementById('sumarVectoresBtn');
const cantidadInput = document.getElementById('cantidadElementos');
const vectoresContainer = document.getElementById('vectoresInputContainer');
const controlesSuma = document.getElementById('controlesSuma');
const resultadoContainer = document.getElementById('resultadoSumaVectores');

generarBtn.addEventListener('click', () => {
  const cantidad = parseInt(cantidadInput.value);
  vectoresContainer.innerHTML = '';
  resultadoContainer.innerHTML = '';

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoContainer.innerHTML = '<p class="error">Por favor, ingresa un tamaño válido y mayor a cero.</p>';
    controlesSuma.style.display = 'none';
    return;
  }

  let html = `
                <div class="vector-columna">
                    <h4>Arreglo 1</h4>
            `;
  for (let i = 0; i < cantidad; i++) {
    html += `<input type="number" placeholder="Valor ${i + 1}" class="numero-input vector1">`;
  }
  html += `</div>`;

  html += `
                <div class="vector-columna">
                    <h4>Arreglo 2</h4>
            `;
  for (let i = 0; i < cantidad; i++) {
    html += `<input type="number" placeholder="Valor ${i + 1}" class="numero-input vector2">`;
  }
  html += `</div>`;

  vectoresContainer.innerHTML = html;
  controlesSuma.style.display = 'block';
});

sumarBtn.addEventListener('click', () => {
  const inputs1 = document.querySelectorAll('.vector1');
  const inputs2 = document.querySelectorAll('.vector2');
  const numeros1 = [];
  const numeros2 = [];
  const numeros3 = [];
  let hayError = false;

  inputs1.forEach(input => {
    const valor = parseFloat(input.value);
    if (isNaN(valor)) hayError = true;
    numeros1.push(valor);
  });

  inputs2.forEach(input => {
    const valor = parseFloat(input.value);
    if (isNaN(valor)) hayError = true;
    numeros2.push(valor);
  });

  if (hayError) {
    resultadoContainer.innerHTML = '<p class="error">Asegúrate de rellenar todos los campos con números válidos.</p>';
    return;
  }

  for (let i = 0; i < numeros1.length; i++) {
    const suma = (numeros1[i] + numeros2[i]).toFixed(2);
    numeros3.push(parseFloat(suma));
  }

  let resultadoHTML = `
                <h3>Resultados de la Suma</h3>
                <p><strong>Arreglo 1:</strong> [${numeros1.join(', ')}]</p>
                <p><strong>Arreglo 2:</strong> [${numeros2.join(', ')}]</p>
                <p class="resultado-final">Arreglo Resultante: [${numeros3.join(', ')}]</p>
            `;

  resultadoContainer.innerHTML = resultadoHTML;
});
