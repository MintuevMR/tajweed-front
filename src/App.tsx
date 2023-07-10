import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
// import Temp from "./pages/Temp";
import Header from "./components/Header";
import Footer from "./components/Footer"

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Temp/>} /> */}
        {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/" element={<Footer/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
