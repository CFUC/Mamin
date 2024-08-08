import "./App.css";
import Navbar from "./components/navbar/navbar";
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
