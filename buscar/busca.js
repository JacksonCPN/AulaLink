// Simulação de dados de professores (substitua com os dados reais do banco de dados)
const professores = [
    { nome: 'Professor 1', materia: 'Matemática', tags: ['matemática', 'álgebra'] },
    { nome: 'Professor 2', materia: 'História', tags: ['história', 'civilizações'] },
    { nome: 'Professor 3', materia: 'Ciências', tags: ['ciências', 'biologia'] },
    { nome: 'Professor 4', materia: 'Inglês', tags: ['inglês', 'idiomas'] },
    { nome: 'Professor 5', materia: 'Matemática', tags: ['matemática', 'álgebra'] },
];

function searchProfessors() {
    const tagInput = document.getElementById('tagInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const matchingProfessors = professores.filter(professor =>
        professor.tags.some(tag => tag.includes(tagInput))
    );

    if (matchingProfessors.length > 0) {
        matchingProfessors.forEach(professor => {
            const professorInfo = document.createElement('div');
            professorInfo.innerHTML = `<strong>Nome:</strong> ${professor.nome}<br><strong>Matéria:</strong> ${professor.materia}<br><strong>Tags:</strong> ${professor.tags.join(', ')}<br><br>`;
            resultsContainer.appendChild(professorInfo);
        });
    } else {
        resultsContainer.innerHTML = 'Nenhum professor encontrado com a tag inserida.';
    }
}
