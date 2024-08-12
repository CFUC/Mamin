import { useEffect } from "react";
import AdList from "../components/adlist/AdList";
import AdProcess from "../components/adprocess/AdProcess";
import Inquliry from "../components/inquliry/Inquliry";
import Introduce from "../components/introduce/introduce";
import Main from "../components/main/main";
import MapCom from "../components/map/MapCom";
import Portfolio from "../components/portfolio/Portfolio";
import ServiceIntroduce from "../components/serviceIntroduce/ServiceIntroduce";
import Services from "../components/services/services";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Main />
      <Introduce />
      <Services />
      <ServiceIntroduce />
      <Portfolio />
      <AdList />
      <AdProcess />
      <Inquliry />
      <MapCom />
    </>
  );
};

export default HomePage;
