import "@coreui/coreui/dist/css/coreui.min.css";
import Accordion from "./components/Accodion";
import Alert from "./components/Alert";
import CollApe from "./components/CollApe";
import "./App.css";
import DropDown from "./components/DropDown";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="flex flex-col">
      <Accordion />
      <Alert />
      <CollApe />
      <DropDown />
      <Modal />
    </div>
  );
}

export default App;
