import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Temp from "./pages/Temp";
import SignIn from "./pages/SignIn/index.tsx";

import "./App.css";

function App() {

    return (
      <Routes>
        <Route path="/" element={<Temp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    );
  }


export default App;
