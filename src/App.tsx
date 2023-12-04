import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resultados from "./pages/Resultados";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Resultados />
      <Footer />
    </>
  );
}

export default App;
