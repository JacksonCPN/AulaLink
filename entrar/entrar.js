import { AuthService } from "../AuthService.js";
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Obter valores de entrada do usuário
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log('Chegou aqui');

   AuthService.login(username, password);

//   // Realizar validação (exemplo simples)
//   if (username === "username" && password === "password") {
//     // Redirecionar o usuário após o login bem-sucedido
//     window.location.href = '/usuario/usuario.html';
   
//   } else {
//     errorMessage.textContent = "Nome de usuário ou senha incorretos. Tente novamente.";
//   }
// });
});