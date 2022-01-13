import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link className="logo" to="/">
        Filmaria
      </Link>
      <Link className="favoritos" to="/favoritos">
        Salvos
      </Link>
    </Container>
  );
}
