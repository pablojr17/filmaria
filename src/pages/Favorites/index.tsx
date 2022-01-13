import { useEffect, useState } from "react";
import { FilmesProps } from "../../interfaces";

import {
  Container,
  ListMovies,
  Movie,
  MovieTitle,
  MovieImage,
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

  return (
    <Container>
      {filmes.length > 0 && (
        <ListMovies>
          {filmes.map((filme: FilmesProps) => (
            <Movie key={filme.id}>
              <MovieTitle>{filme.nome}</MovieTitle>
              <MovieImage src={filme.foto} alt={filme.nome} loading="lazy" />
              <LinkMovie to={`/filme/${filme.id}`}>Acessar</LinkMovie>
            </Movie>
          ))}
        </ListMovies>
      )}
    </Container>
  );
}
