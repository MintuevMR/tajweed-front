import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Temp from "./pages/Temp";

import "./App.css";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp/>} />
        {/* <Route path="/alphabet" element={<Temp/>} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
