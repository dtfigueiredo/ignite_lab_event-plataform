import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

interface Lesson {
  id: string;
  title: string;
  teacher: string;
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

export function App() {
  //* EXEMPLO DE QUERY FEITA POR EXTENSO UTILIZANDO EFFECT + APOLLO
  // useEffect(() => {
  //   client.query({ query: GET_LESSONS_QUERY }).then((response) => {
  //     console.log(response.data);
  //   });
  // }, []);

  //* QUERY FEITA DIRETAMENTE COM O HOOK USEQUERY DO APOLLO
  const { data } = useQuery(GET_LESSONS_QUERY);

  console.log({ data });

  return (
    <>
      <h1 className="text-2xl font-bold  underline">LISTA DE AULAS</h1>

      <ul>
        {data?.lessons.map((aula: Lesson) => (
          <li key={`${aula.id}-${aula.title}`}>
            <details>
              <summary>{aula.title}</summary>
              <p>{aula.teacher.name}</p>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}
