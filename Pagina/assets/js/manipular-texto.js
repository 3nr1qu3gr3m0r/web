const generarCamposBtn = document.getElementById('generarCamposBtn');
const analizarBtn = document.getElementById('analizarBtn');
const cantidadInput = document.getElementById('cantidadTextos');
const camposContainer = document.getElementById('camposTextoContainer');
const controlesAnalizar = document.getElementById('controlesAnalizar');
const resultadoContainer = document.getElementById('resultadoAnalisis');

generarCamposBtn.addEventListener('click', () => {
  const cantidad = parseInt(cantidadInput.value);
  camposContainer.innerHTML = '';
  resultadoContainer.style.display = 'none';
  resultadoContainer.innerHTML = '';

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoContainer.innerHTML = '<p class="error">Por favor, ingresa un número válido y mayor a cero.</p>';
    resultadoContainer.style.display = 'block';
    controlesAnalizar.style.display = 'none';
    return;
  }

  for (let i = 0; i < cantidad; i++) {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    formGroup.innerHTML = `
                    <label for="texto-${i}">Texto ${i + 1}:</label>
                    <input type="text" id="texto-${i}" class="texto-input" placeholder="Ingresa el texto ${i + 1}">
                `;
    camposContainer.appendChild(formGroup);
  }
  controlesAnalizar.style.display = 'block';
});

analizarBtn.addEventListener('click', () => {
  const inputs = camposContainer.querySelectorAll('.texto-input');
  let resultadoHTML = '<h3>Resultados del Análisis</h3>';
  let hayError = false;

  inputs.forEach((input, index) => {
    const texto = input.value;
    if (texto.trim() === '') {
      hayError = true;
    }

    const longitud = texto.length;
    const mayusculas = texto.toUpperCase();
    const minusculas = texto.toLowerCase();

    resultadoHTML += `
                    <div class="resultado-item">
                        <h4>Análisis del Texto ${index + 1}</h4>
                        <div class="proceso-grid">
                            <div class="proceso-fila"><strong>Original:</strong> "${texto}"</div>
                            <div class="proceso-fila"><strong>Longitud:</strong> ${longitud} caracteres</div>
                            <div class="proceso-fila"><strong>Mayúsculas:</strong> ${mayusculas}</div>
                            <div class="proceso-fila"><strong>Minúsculas:</strong> ${minusculas}</div>
                        </div>
                    </div>
                `;
  });

  if (hayError) {
    resultadoContainer.innerHTML = '<p class="error">Por favor, asegúrate de rellenar todos los campos de texto.</p>';
    resultadoContainer.style.display = 'block';
    return;
  }

  resultadoContainer.innerHTML = resultadoHTML;
  resultadoContainer.style.display = 'block';
});