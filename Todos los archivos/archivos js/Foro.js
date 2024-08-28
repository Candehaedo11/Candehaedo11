// pruebo cuadro de diálogo navegador

{
    let nombre = prompt ("¿Cuál es tu nombre?");
    alert("Hola " + nombre + ", bienvenidx a nuestro sitio :) ¡Esperamos que te sea útil y lo disfrutes!");
}

// foro de comentarios

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

