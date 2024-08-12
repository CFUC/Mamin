import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import MetaTag from "./common/MetaTag";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Policy from "./pages/Policy";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [black, setBlack] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if(location.pathname !== '/') return;

    if (scroll >= 200) {
      setBlack(true);
    } else {
      setBlack(false);
    }
  }, [scroll]);
  return (
    <>
      <MetaTag />
      <Navbar black={black}/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/policy" element={<Policy setBlack={setBlack}/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
