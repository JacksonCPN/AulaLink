import { Constantes } from "./constantes";

export class AuthService { 
    login(usuario, senha) {
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
        } else {
            console.error('Falha na autenticação:', data.mensagem);
        }
        })
        .catch(error => {
        console.error('Erro na requisição:', error);
        });
    }
}
