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
import MetaTag from "./common/MetaTag";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <MetaTag />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
