import "./App.css";
import AdList from "./components/adlist/AdList";
import AdProcess from "./components/adprocess/AdProcess";
import Portfolio from "./components/portfolio/Portfolio";
import ServiceIntroduce from "./components/serviceIntroduce/ServiceIntroduce";

function App() {
  return (
    <>
      <ServiceIntroduce />
      <Portfolio />
      <AdList />
      <AdProcess />
    </>
  );
}

export default App;
