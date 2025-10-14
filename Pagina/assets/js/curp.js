const boton = document.getElementById("generarBtn");
const resultadoContainer = document.getElementById('resultadoCurp');

boton.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.toUpperCase();
  const paterno = document.getElementById("paterno").value.toUpperCase();
  const materno = document.getElementById("materno").value.toUpperCase();
  const fecha = document.getElementById("fecha").value;
  const sexo = document.getElementById("sexo").value;
  const lugar = document.getElementById("lugar").value.toUpperCase();

  let errores = [];
  if (!nombre || !paterno || !fecha || !sexo || !lugar) {
    errores.push("Todos los campos son obligatorios (excepto apellido materno).");
  }
  if (/[^A-ZÑ ]/.test(nombre)) errores.push("El nombre solo debe contener letras.");
  if (/[^A-ZÑ]/.test(paterno)) errores.push("El apellido paterno solo debe contener letras.");
  if (materno && /[^A-ZÑ]/.test(materno)) errores.push("El apellido materno solo debe contener letras.");
  if (!/^[A-Z]{2}$/.test(lugar)) errores.push("La entidad federativa deben ser 2 letras mayúsculas.");

  if (errores.length > 0) {
    resultadoContainer.innerHTML = `<p class="error">${errores.join('<br>')}</p>`;
    resultadoContainer.style.display = 'block';
    return;
  }

  const obtenerVocalInterna = (cadena) => {
    for (let i = 1; i < cadena.length; i++) {
      if ("AEIOU".includes(cadena[i])) {
        return cadena[i];
      }
    }
    return 'X'; 
  };

  const obtenerConsonanteInterna = (cadena) => {
    for (let i = 1; i < cadena.length; i++) {
      if (!"AEIOU".includes(cadena[i])) {
        return cadena[i];
      }
    }
    return 'X';
  };

  const primerApellido = paterno || 'X';
  const segundoApellido = materno || 'X';

  let curp = primerApellido.charAt(0);
  curp += obtenerVocalInterna(primerApellido);
  curp += segundoApellido.charAt(0);
  curp += nombre.charAt(0);
  curp += fecha.substring(2, 4); 
  curp += fecha.substring(5, 7); 
  curp += fecha.substring(8, 10); 
  curp += sexo;
  curp += lugar;
  curp += obtenerConsonanteInterna(primerApellido);
  curp += obtenerConsonanteInterna(segundoApellido);
  curp += obtenerConsonanteInterna(nombre);

  resultadoContainer.innerHTML = `<h3>CURP Generada:</h3><p class="resultado-final">${curp}</p>`;
  resultadoContainer.style.display = 'block';
});