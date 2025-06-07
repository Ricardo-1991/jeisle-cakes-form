import "./App.css";
import { ComponentForm } from "./components/Form/ComponentForm";
import { Header } from "./components/Header/Header";
import { Container } from "./components/UIcontainer/Container";
import Modal from "react-modal";
import { Footer } from "./components/Footer/Footer";

Modal.setAppElement("#root"); // Acessibilidade
function App() {
  return (
    <Container>
      <Header />
      <main className="main-content">
        <ComponentForm />
      </main>
    </Container>
  );
}
export default App;
