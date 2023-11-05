import { Constantes } from "./constantes";

export class AuthService {
  static login(usuario, senha) {
    console.log('Chegou aqui')

    const url = `${Constantes.urlBase}/singin`;
    const dados = {
      usuario: usuario,
      senha: senha
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(dados),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          console.log('Usuário autenticado:', data);

          localStorage.setItem('token', data.token);
           // Redirecionar o usuário após o login bem-sucedido
          window.location.href = '/usuario/usuario.html';
        } else {
          console.error('Falha na autenticação:', data.mensagem);
          errorMessage.textContent = "Nome de usuário ou senha incorretos. Tente novamente.";
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        errorMessage.textContent = "Erro na requisição. Tente novamente mais tarde.";
      });
  }
}