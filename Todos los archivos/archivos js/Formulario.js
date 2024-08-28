document.getElementById("comentario-form").addEventListener("submit", function(event) {
	event.preventDefault();
	var nombre = document.getElementById("nombre").value;
	var comentario = document.getElementById("comentario").value;
	agregarComentario(nombre, comentario);
});

function agregarComentario(nombre, comentario) {
	var contenedorComentarios = document.getElementById("comentarios");
	var comentarioHTML = `
		<div class="comentario">
			<span class="nombre">${nombre}</span>
			<span class="texto">${comentario}</span>
		</div>
	`;
	contenedorComentarios.innerHTML += comentarioHTML;
}

//...

// Agrega un botón "Responder" debajo de cada comentario
document.querySelectorAll('.comentario').forEach(comentario => {
    const responderButton = document.createElement('button');
    responderButton.textContent = 'Responder';
    comentario.appendChild(responderButton);
    
    // Agrega un evento de clic al botón "Responder"
    responderButton.addEventListener('click', () => {
      const respuestaForm = document.createElement('form');
      respuestaForm.innerHTML = `
        <input type="text" placeholder="Tu respuesta">
        <button>Enviar respuesta</button>
      `;
      comentario.appendChild(respuestaForm);
      
      // Agrega un evento de envío al formulario de respuesta
      respuestaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const respuesta = respuestaForm.querySelector('input').value;
        agregarRespuesta(comentario, respuesta);
      });
    });
  });
  
  // Función para agregar una respuesta a un comentario
  function agregarRespuesta(comentario, respuesta) {
    const respuestaHTML = `
      <div class="respuesta">
        <span class="texto">${respuesta}</span>
 </div>
  `;
  comentario.innerHTML += respuestaHTML;
}


