function validateForm() {
    // Implemente a validação dos campos aqui

    // Exemplo de validação do campo de senha e confirmação de senha
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "As senhas não coincidem.";
        return false;
    }

    // Se tudo estiver correto, o formulário será enviado
    return true;
}

// Mostrar/ocultar campos de professor com base na seleção
const isTeacherCheckbox = document.getElementById("isTeacher");
const teacherInfoDiv = document.getElementById("teacherInfo");
isTeacherCheckbox.addEventListener("change", function () {
    if (isTeacherCheckbox.checked) {
        teacherInfoDiv.style.display = "block";
    } else {
        teacherInfoDiv.style.display = "none";
    }
});

function validateForm() {
    // Exemplo de validação do campo de senha e confirmação de senha
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const education = document.getElementById("education").value;
    const formation = document.getElementById("formation");
    const formationDate = document.getElementById("formationDate");
    const certificates = document.getElementById("certificates");

    console.log("Senha:", password);
    console.log("Confirmação de Senha:", confirmPassword);
    console.log("usuario:", username);
    console.log("email:", email);
    console.log("Senha:", password);
    console.log("Confirmação de Senha:", confirmPassword);
    console.log("Idade:", age);
    console.log("educação", education);
    console.log("Se for professor");
    console.log("formação:", formation);
    console.log("Data formação:", formationDate);
    console.log("certificados:", certificates);

    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "As senhas não coincidem.";
        return false;
    }

    // Continuar validações e lógica aqui

    return true;
}

// Mostrar/ocultar campos de professor com base na seleção
// const isTeacherCheckbox = document.getElementById("isTeacher");
// const teacherInfoDiv = document.getElementById("teacherInfo");
// isTeacherCheckbox.addEventListener("change", function () {
//     if (isTeacherCheckbox.checked) {
//         teacherInfoDiv.style.display = "block";
//     } else {
//         teacherInfoDiv.style.display = "none";
//     }

//     console.log("É professor?", isTeacherCheckbox.checked);
// });
