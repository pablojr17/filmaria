import { Container, DetailsNotFound, LinkHome } from "./styles";

export function NotFound() {
  return (
    <Container>
      <DetailsNotFound>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <LinkHome to="/">Voltar para a home</LinkHome>
      </DetailsNotFound>
    </Container>
  );
}
