import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ConsultorioGeral from "./pages/ConsultorioGeral";
import Especialidade from "./pages/Especialidade";
import Home from "./pages/Home";
import Resultados from "./pages/Resultados";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Resultados />
      <Especialidade />
      <ConsultorioGeral />
      <Footer />
    </>
  );
}

export default App;
