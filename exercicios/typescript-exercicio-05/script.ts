async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCurso(data);
}

fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: "iniciante" | "avancado";
}

function mostrarCurso(curso: Array<Curso>) {
  curso.forEach((curso) => {
    let color;

    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color:${color}">${curso.nome}</h1>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Gratuito: ${curso.gratuito ? "Sim" : "Nao"}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Id das Aulas: ${curso.idAulas.join(", ")}</p>
      </div>
    `;
  });
}
