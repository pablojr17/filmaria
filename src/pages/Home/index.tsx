import { useEffect, useState } from "react";
import { FilmesProps } from "../../interfaces";
import api from "../../services/api";

import {
  Container,
  ListMovies,
  Movie,
  MovieTitle,
  MovieImage,
  LinkMovie,
} from "./styles";

export function Home() {
  const [filmes, setFilmes] = useState<FilmesProps[]>([]);

  useEffect(() => {
    async function loadFilmes() {
      const { data } = await api.get<FilmesProps[]>(`r-api/?api=filmes`);
      setFilmes(data);
    }
    loadFilmes();
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
