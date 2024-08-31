//Test de bienestar

const form = document.getElementById('test-form');
const resultados = document.getElementById('resultados');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value;
	const pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value;
	
	// Lógica para calcular el resultado del test
	let resultado = '';
	if (pregunta1 === 'Bien' && pregunta2 === '5-7 horas') {
		resultado = 'Tu bienestar es excelente!';
	} else if (pregunta1 === 'Regular' && pregunta2 === '5-7 horas') {
		resultado = 'Tu bienestar es bueno, pero podrías mejorar.';
	} else {
		resultado = 'Tu bienestar es regular, debes tomar medidas para mejorar.';
	}
	
	resultados.innerHTML = resultado;
});

// carga de datos

// Crear cookie
function crearCookie(nombre, valor, dias) {
	var fecha = new Date();
	fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
	var expires = "; expires=" + fecha.toGMTString();
	document.cookie = nombre + "=" + valor + expires + "; path=/";
  }
  
  // Leer cookies
  function leerCookie(nombre) {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
	var cookie = cookies[i].trim();
	if (cookie.startsWith(nombre + '=')) {
	return cookie.substring(nombre.length + 1);
	}
	}
	return null;
	}
	
  
  // Calcular resultado del test de bienestar
  function calcularResultado(pregunta1, pregunta2, pregunta3) {
	let resultado = '';
	if (pregunta1 === 'Bien' && pregunta2 === '5-7 horas' && pregunta3 === 'Sí') {
	  resultado = 'Tu bienestar es excelente!';
	} else if (pregunta1 === 'Regular' && pregunta2 === '5-7 horas' && pregunta3 === 'No') {
		resultado = 'Tu bienestar es bueno, pero podrías mejorar.';
	} else {
	  resultado = 'Tu bienestar es regular, debes tomar medidas para mejorar.';
	}
	return resultado;
  }
  
  // Guardar resultado en cookie
  function guardarResultadoEnCookie() {
	const pregunta1 = document.querySelector('input[name="pregunta1"]:checked').value;
	const pregunta2 = document.querySelector('input[name="pregunta2"]:checked').value;
	const pregunta3 = document.querySelector('input[name="pregunta3"]:checked').value;
	const resultado = calcularResultado(pregunta1, pregunta2, pregunta3);
	crearCookie("resultadoTest", resultado, 60); // Guardar resultado en cookie que caduca en 60 días
  }
  
  // Mostrar resultado de la cookie
  function mostrarResultadoDeCookie() {
	const resultado = leerCookie("resultadoTest");
	if (resultado) {
	  document.getElementById("resultados").textContent = resultado;
	} else {
	  document.getElementById("resultados").textContent = "No hay resultado guardado";
	}
}

// Llamar a las funciones
guardarResultadoEnCookie("resultadoTest");
mostrarResultadoDeCookie("resultadoTest");

	