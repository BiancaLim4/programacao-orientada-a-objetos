//-----Programa simples de armazenamento de dados com Map-----
let Alunos = new Map();

Alunos.set('João', 8.5);
Alunos.set('Maria', 9.5);
Alunos.set('Bianca', 8.5);
Alunos.set('Manuella', 8.0);
Alunos.set('Pedro', 5.0);
Alunos.set('Vagner', 4.5);

    console.log(Alunos.get('Bianca'));

// Função para verificar se um aluno existe
    function existe_aluno_na_lista(nome) {
        if (Alunos.has(nome)) {
            console.log(`Este aluno "${nome}" está registrado.`);
        } else {
            console.log(`Este aluno "${nome}" não está registrado.`);
        }
     }


existe_aluno_na_lista('João');
 existe_aluno_na_lista('Carlos');

// Loop para imprimir todos
    
for (let [nome, nota] of Alunos.entries()) {
    console.log(`${nome}: ${nota}`);
}