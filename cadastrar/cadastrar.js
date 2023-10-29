const registrationForm = document.getElementById("registration-form");
        const isTeacherCheckbox = document.getElementById("isTeacher");
        const teacherFields = document.getElementById("teacherFields");

        isTeacherCheckbox.addEventListener("change", function () {
            if (isTeacherCheckbox.checked) {
                teacherFields.classList.remove("hidden");
            } else {
                teacherFields.classList.add("hidden");
            }
        });

        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Obtenha os valores dos campos
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const age = document.getElementById("age").value;
            const education = document.getElementById("education").value;
            const isTeacher = isTeacherCheckbox.checked;
            const formation = document.getElementById("formation").value;
            const formationDate = document.getElementById("formationDate").value;
            const experience = document.getElementById("experience").value;

            // Validação simples dos campos
            if (!username || !email || !password || !confirmPassword || !age || !education) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            if (password !== confirmPassword) {
                alert("As senhas não coincidem. Tente novamente.");
                return;
            }

            if (isTeacher && (!formation || !formationDate || !experience)) {
                alert("Preencha todos os campos de professor.");
                return;
            }

            // Aqui, você pode enviar os dados do formulário para o servidor ou fazer o que for necessário com eles.
            alert("Cadastro realizado com sucesso!");
        });