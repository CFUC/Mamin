import "./App.css";
import AdList from "./components/adlist/AdList";
import AdProcess from "./components/adprocess/AdProcess";
import Portfolio from "./components/portfolio/Portfolio";
import ServiceIntroduce from "./components/serviceIntroduce/ServiceIntroduce";
import Introduce from "./components/introduce/introduce";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";
import Inquliry from "./components/inquliry/Inquliry";
import MapCom from "./components/map/MapCom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Introduce />
      <Services />
      <ServiceIntroduce />
      <Portfolio />
      <AdList />
      <AdProcess />
      <Inquliry />
      <MapCom />
      <Footer />
    </>
  );
}

export default App;
