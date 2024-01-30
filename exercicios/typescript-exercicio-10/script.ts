async function fetchCourses() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();
  handleCourse(json);
  /* if (Array.isArray(json)) {
    json.map((course) => {
      handleCourses(course);
    });
    return true;
  } else {
    return false;
  } */
}

fetchCourses();

interface Course {
  nome: string;
  horas: number;
  gratuito: boolean;
  tags: string[];
  aulas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

/* FORMA QUE PENSEI */

/* function isCourse(value: unknown): value is Course {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCourses(value: Course) {
  if (isCourse(value)) {
    if (typeof value.nome === "string") {
      document.body.innerHTML += `
                <h1>${value.nome}</h1>
            `;
    }
    if (typeof value.horas === "number") {
      document.body.innerHTML += `
                  <h2>${value.horas}</h2>
              `;
    }
    if (value.tags instanceof Array) {
      document.body.innerHTML += `
                  <p>${value.tags}</p>
              `;
    }
    if (typeof value.gratuito === "boolean") {
      document.body.innerHTML += `
                  <p>${value.gratuito}</p>
              `;
    }
    if (typeof value.aulas === "number") {
      document.body.innerHTML += `
                  <p>${value.aulas}</p>
              `;
    }
    if (value.idAulas instanceof Array) {
      document.body.innerHTML += `
                  <p>${value.idAulas}</p>
              `;
    }
    if (value.nivel === "iniciante" | value.nivel === "avancado") {
      document.body.innerHTML += `
                  <p>${value.nivel}</p>
              `;
    }
    return true;
  } else {
    return false;
  }
}
 */

function isCourse(value: unknown): value is Course {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value &&
    "gratuito" in value &&
    "idAulas" in value &&
    "nivel" in value &&
    "aulas" in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCourse(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCourse).forEach((course) => {
      document.body.innerHTML += `
            <h1>${course.nome}</h1>
            <h2>Horas: ${course.horas}</h2>
            <p>Tags : ${course.tags}</p>
            <p>Nivel: ${course.nivel}</p>
            <p>ID das Aulas: ${course.idAulas}</p>
            <p>E gratuito? ${course.gratuito}</p>
            <p>Aulas: ${course.aulas}</p>
        `;
    });
  }
}
