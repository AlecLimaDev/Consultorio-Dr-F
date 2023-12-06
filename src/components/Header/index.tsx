import { Container } from "./style";

function Header() {
  return (
    <>
      <Container>
        <ul>
          <figure>DR. FLÁVIO</figure>
        </ul>
        <ul>
          <li>
            <a
              target="_blank"
              href=
              "https://api.whatsapp.com/send?phone=5521995781792&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Flávio"
            >
              AGENDAR UMA CONSULTA
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default Header;
