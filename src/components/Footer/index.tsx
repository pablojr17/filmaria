import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Link className="logo" to="/">
        Filmaria
      </Link>
      <Link className="favoritos" to="/">
        Salvos
      </Link>
    </Container>
  );
}
