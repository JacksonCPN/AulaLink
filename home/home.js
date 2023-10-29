 // Selecionar o ícone do menu e o menu
 const menuIcon = document.getElementById("menu-icon");
 const menu = document.getElementById("menu");

 // Adicionar um evento de clique ao ícone do menu
 menuIcon.addEventListener("click", function() {
     // Alternar a classe 'active' no menu para exibir/ocultar o menu
     menuMobile.classList.toggle("active");
 });