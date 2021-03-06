import { useEffect, useState } from "react";
import { FilmesProps } from "../../interfaces";
import { toast } from "react-toastify";

import {
  Container,
  ListMovies,
  Movie,
  MovieTitle,
  DetailsMovie,
  LinkMovie,
} from "./styles";
import { Loading } from "../../components/Loading";

export function Favovite() {
  const [filmes, setFilmes] = useState<FilmesProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function saveMovie() {
      const myList = localStorage.getItem("filmes");
      let filmesSalvos = JSON.parse(myList || "[]");
      setFilmes(filmesSalvos);
      setLoading(false);
    }
    saveMovie();
  }, []);

  function handleDelete(id: number) {
    const newList = filmes.filter((item) => item.id !== id);
    localStorage.setItem("filmes", JSON.stringify(newList));
    setFilmes(newList);

    toast.success("Filme removido com sucesso!");
  }

  if (loading) {
    return <Loading />;
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
