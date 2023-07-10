import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Temp from "./pages/Temp";
import SignIn from "./pages/SignIn/index.tsx";
import Azkary from "./pages/Azkary/index.tsx";
import Morning from "./pages/Azkary/morning.tsx"
import Evening from "./pages/Azkary/evening.tsx"

import "./App.css";
import SignUp from "./pages/SignUp";

function App() {

    return (
      <Routes>
        <Route path="/register" element={<SignUp/>} />
        {/* <Route path="/alphabet" element={<Temp/>} /> */}
        <Route path="/" element={<Temp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<SignIn />} />


        <Route path="/azkary" element={<Azkary />}/>
        <Route path="/azkary/morning" element={<Morning />}/>
        <Route path="/azkary/evening" element={<Evening />}/>

      </Routes>
    );
  }


export default App;
