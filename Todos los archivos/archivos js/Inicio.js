// Boton registrarse

const signupForm = document.getElementById('signup-form');
const signupBtn = document.getElementById('signup-btn');

signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Validar la información recopilada
  if (name === '' || email === '' || password === '') {
    alert('Por favor, complete todos los campos');
    return;
  }
  
  // Enviar la información a un servidor o base de datos
  fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Redirigir al usuario a una página de confirmación o inicio de sesión
      window.location.href = '/login';
    } else {
		alert('Error al crear la cuenta');
    }
  })
  .catch((error) => {
    console.error(error);
  });
});
