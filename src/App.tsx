import "./App.css";
import Introduce from "./components/introduce/introduce";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";

function App() {
  return <>
    <Navbar/>
    <Main/>
    <Introduce/>
    <Services/>
  </>;
}

export default App;
