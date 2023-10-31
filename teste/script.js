// script.js
function searchDatabase() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    console.log("Termo de pesquisa:", searchTerm);
    var results = database.filter(function(item) {
        return item.nome.toLowerCase().includes(searchTerm);
    });
    console.log("Resultados:", results);
    // Redirecionar para a página de resultados com os dados
    window.location.href = "results.html?data=" + JSON.stringify(results);
}

var database = [
    { id: 1, nome: "João", sobrenome: "Silva" },
    { id: 2, nome: "Maria", sobrenome: "Santos" },
    { id: 3, nome: "Pedro", sobrenome: "Ferreira" },
    // Adicione mais dados conforme necessário
];

