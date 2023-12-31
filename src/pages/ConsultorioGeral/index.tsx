import { Container } from "./style";

function consultorioGeral() {
  return (
    <>
      <Container>
        <article>
          <h1>Consultório Geral</h1>
        </article>
        <div>
          <p>
            É a porta de entrada dos pacientes para a prevenção, diagnóstico e
            tratamento. Eu vou realizar a avaliação
            integral da saúde bucal do paciente. Vou escutar as suas queixas,
            para então realizar o diagnóstico e o planejamento adequado do
            tratamento. Caso seja necessário, o paciente será encaminhado para
            um dentista especializado. Veja alguns dos procedimentos realizados
            no meu consultório:
            <br />
            <br />
            <li>Aplicação de flúor</li>
            <li>Limpeza Dental</li>
            <li>Raspagem de tártaro</li>
            <li>Remoção de cárie</li>
            <li>Atendimentos de urgência</li>
            <li>Pequenas restaurações</li>
            <li>Orientações para higiene bucal</li>
          </p>
          <div>
            <img src="https://i.postimg.cc/RV87cqL2/5.jpg" alt="Foto" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default consultorioGeral;
