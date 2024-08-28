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

