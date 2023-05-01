
let listaAlunos = [
  { nome: "Pedro Campos Miranda", curso: "TDS", RA: "15704225675", foto: "./fotos/15704225675.jpeg" },
  { nome: "Adilio Filho", curso: "TDS", RA: "987654321", foto: "./fotos/987654321.jpeg" },
  { nome: "Ericson Diniz", curso: "TDS", RA: "123456789", foto: "./fotos/123456789.jpeg" },

  { nome: "Artur Campos Miranda", curso: "ADS", RA: "15704217656", foto: "./fotos/15704217656.jpeg" },
  { nome: "Luan Flor Gustavo", curso: "ADS", RA: "159753697", foto: "./fotos/159753697.jpeg" }
];

let formPesquisa = document.getElementById("form-pesquisa");
let InputRA = document.getElementById("inputRA");
let tabelaAlunos = document.getElementById("tabela-alunos");

formPesquisa.addEventListener("submit", function(event) {
  event.preventDefault();

  let RAAluno = InputRA.value;

  // Procura o objeto de aluno correspondente na lista
  let aluno = listaAlunos.find(function(aluno) {
    return aluno.RA === RAAluno;
  });

  if (aluno) {
    let linhaAluno = document.createElement("tr");

    let nomeTd = document.createElement("td");
    nomeTd.innerHTML = aluno.nome;

    let cursoTd = document.createElement("td");
    cursoTd.innerHTML = aluno.curso;

    let RATd = document.createElement("td");
    RATd.innerHTML = aluno.RA;

    let FotoTd = document.createElement("td");
    let imagem = document.createElement("img");
    imagem.src = aluno.foto;
    FotoTd.appendChild(imagem);

    linhaAluno.appendChild(nomeTd);
    linhaAluno.appendChild(cursoTd);
    linhaAluno.appendChild(RATd);
    linhaAluno.appendChild(FotoTd);

    tabelaAlunos.innerHTML = "";
    tabelaAlunos.appendChild(linhaAluno);

  } else {
    tabelaAlunos.innerHTML = "<tr><td colspan=\"4\">Aluno não encontrado</td></tr>";
  }
});

console.log("working");

