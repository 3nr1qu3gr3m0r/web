const generarCamposBtn = document.getElementById('generarCamposBtn');
const encontrarMayorBtn = document.getElementById('encontrarMayorBtn');
const camposContainer = document.getElementById('camposContainer');
const cantidadInput = document.getElementById('cantidadNumeros');
const controlesBusqueda = document.getElementById('controlesBusqueda');
const resultadoContainer = document.getElementById('resultadoNumeroMayor');

generarCamposBtn.addEventListener('click', () => {
  const cantidad = parseInt(cantidadInput.value);
  resultadoContainer.innerHTML = '';
  camposContainer.innerHTML = '';

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoContainer.innerHTML = '<p class="error">Por favor, ingresa un número válido y mayor a cero.</p>';
    controlesBusqueda.style.display = 'none';
    return;
  }

  for (let i = 0; i < cantidad; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Número ${i + 1}`;
    input.className = 'numero-input';
    camposContainer.appendChild(input);
  }

  controlesBusqueda.style.display = 'block';
});

encontrarMayorBtn.addEventListener('click', () => {
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

  if (numeros.length === 0) {
    return;
  }

  let mayor = numeros[0];
  let pos = 0;

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
      pos = i;
    }
  }

  let resultadoHTML = `
                <h3>Resultados</h3>
                <p><strong>Arreglo ingresado:</strong> [${numeros.join(', ')}]</p>
                <p class="resultado-final">El número mayor es ${mayor} y se encuentra en la posición ${pos}.</p>
            `;
  resultadoContainer.innerHTML = resultadoHTML;
});