import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Temp from "./pages/Temp";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Temp/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
