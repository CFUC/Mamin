import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/Footer";
import MetaTag from "./common/MetaTag";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Policy from "./pages/Policy";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";

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
    if (location.pathname !== "/") return;

    if (scroll >= 100) {
      setBlack(true);
    } else {
      setBlack(false);
    }
  }, [scroll]);
  return (
    <>
      <MetaTag />
      <Navbar black={black} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/policy" element={<Policy setBlack={setBlack} />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
