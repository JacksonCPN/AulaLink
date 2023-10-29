const loginForm = document.getElementById("login-form");
        const errorMessage = document.getElementById("error-message");

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Obter valores de entrada do usuário
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Realizar validação (exemplo simples)
            if (username === "seu_nome_de_usuario" && password === "sua_senha") {
                // Redirecionar o usuário após o login bem-sucedido
                window.location.href = "/painel_do_usuario.html";
            } else {
                errorMessage.textContent = "Nome de usuário ou senha incorretos. Tente novamente.";
            }
        });