import { useEffect, useState } from "react";
import { FilmesProps } from "../../interfaces";

import {
  Container,
  ListMovies,
  Movie,
  MovieTitle,
  DetailsMovie,
  LinkMovie,
} from "./styles";

export function Favovite() {
  const [filmes, setFilmes] = useState<FilmesProps[]>([]);

  useEffect(() => {
    function saveMovie() {
      const myList = localStorage.getItem("filmes");
      let filmesSalvos = JSON.parse(myList || "[]");
      setFilmes(filmesSalvos);
    }
    saveMovie();
  }, []);

  function handleDelete(id: number) {
    const newList = filmes.filter((item) => item.id !== id);
    localStorage.setItem("filmes", JSON.stringify(newList));
    setFilmes(newList);
  }

  return (
    <Container>
      <h1>Meus filmes</h1>
      {filmes.length !== 0 ? (
        <ListMovies>
          {filmes.map((filme: FilmesProps) => (
            <Movie key={filme.id}>
              <MovieTitle>{filme.nome}</MovieTitle>

              <DetailsMovie>
                <LinkMovie to={`/filme/${filme.id}`}>Acessar</LinkMovie>
                <button onClick={() => handleDelete(filme.id)}>Excluir</button>
              </DetailsMovie>
            </Movie>
          ))}
        </ListMovies>
      ) : (
        <h3>Nenhum filme salvo :(</h3>
      )}
    </Container>
  );
}
