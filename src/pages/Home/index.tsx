import { Container } from "./style";

function Home() {
  return (
    <>
      <Container>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/n-SxEMcN7Aw?si=2XTuq-duTrqLjzZb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <h1>
          Proporciono lindos sorrisos que possam encantar e levar alegria ao mundo
          </h1>
          <p>
            O meu foco é em um atendimento de alta qualidade, cuidadosamente
            elaborado para pessoas que buscam resultados extraordinários em seus
            sorrisos. Descubra comigo o seu sorriso escondido e conquiste o
            sorriso que sempre sonhou!
          </p>
        
        </div>
      </Container>
    </>
  );
}

export default Home;
