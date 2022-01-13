import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FilmesProps } from "../../interfaces";
import api from "../../services/api";

import {
  Container,
  MovieTitle,
  MovieImage,
  ContentBtn,
  MovieSinopse,
} from "./styles";

export function Movies() {
  const [filme, setFilme] = useState<FilmesProps>({} as FilmesProps);
  const [loading, setLoading] = useState(true);
  const [assistir, setAssistir] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadFilme() {
      const { data } = await api.get<FilmesProps>(`r-api/?api=filmes/${id}`);

      // tentou acessar uma ID que não existe
      if (data.length === 0) {
        navigate("/", { replace: true });
      }
      setFilme(data);
      setLoading(false);
    }
    loadFilme();
  }, [id, navigate]);

  function saveMovie() {
    const myList = localStorage.getItem("filmes");
    let filmesSalvos = JSON.parse(myList || "[]");

    const hasMovie = filmesSalvos.some(
      (filme: FilmesProps) => filme.id === Number(id)
    );

    if (hasMovie) {
      alert("Filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    alert("Filme adicionado com sucesso!");
  }

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <MovieTitle>{filme.nome}</MovieTitle>
      {!assistir ? (
        <MovieImage src={filme.foto} alt={filme.nome} loading="lazy" />
      ) : (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EQxCycVTfcU?controls=0&amp;start=1autoplay=1&loop=1&autopause=0"
          title="YouTube video player"
          allow="autoplay"
        ></iframe>
      )}

      <MovieSinopse>{filme.sinopse}</MovieSinopse>

      <ContentBtn>
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
        <button onClick={() => setAssistir(!assistir)}>
          {assistir ? "Voltar" : "Assistir"}
        </button>
      </ContentBtn>
    </Container>
  );
}
