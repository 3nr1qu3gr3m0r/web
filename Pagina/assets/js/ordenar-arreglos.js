const generarCamposBtn = document.getElementById('generarCamposBtn');
const ordenarBtn = document.getElementById('ordenarBtn');
const camposContainer = document.getElementById('camposContainer');
const cantidadInput = document.getElementById('cantidadElementos');
const controlesOrdenar = document.getElementById('controlesOrdenar');
const resultadoContainer = document.getElementById('resultadoOrdenar');

generarCamposBtn.addEventListener('click', () => {
  const cantidad = parseInt(cantidadInput.value);
  resultadoContainer.innerHTML = '';
  camposContainer.innerHTML = '';

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoContainer.innerHTML = '<p class="error">Por favor, ingresa un tamaño válido y mayor a cero.</p>';
    controlesOrdenar.style.display = 'none';
    return;
  }

  for (let i = 0; i < cantidad; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Valor ${i + 1}`;
    input.className = 'numero-input';
    camposContainer.appendChild(input);
  }

  controlesOrdenar.style.display = 'block';
});

ordenarBtn.addEventListener('click', () => {
  const inputs = camposContainer.querySelectorAll('.numero-input');
  const numeros = [];
  let hayError = false;

  inputs.forEach(input => {
    const valor = parseFloat(input.value);
    if (isNaN(valor)) {
      hayError = true;
    }
    numeros.push(valor);
  });

  if (hayError) {
    resultadoContainer.innerHTML = '<p class="error">Por favor, rellena todos los campos con números válidos.</p>';
    return;
  }

  const original = [...numeros];
  const ordenados = numeros;


  for (let i = 0; i < ordenados.length; i++) {
    for (let j = i + 1; j < ordenados.length; j++) {
      if (ordenados[i] > ordenados[j]) {
        let temp = ordenados[i];
        ordenados[i] = ordenados[j];
        ordenados[j] = temp;
      }
    }
  }

  let resultadoHTML = `
                <h3>Resultados</h3>
                <p><strong>Arreglo Original:</strong> [${original.join(', ')}]</p>
                <p class="resultado-final">Arreglo Ordenado: [${ordenados.join(', ')}]</p>
            `;
  resultadoContainer.innerHTML = resultadoHTML;
});