import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";

import Temp from "./pages/Temp";
import SignIn from "./pages/SignIn/index.tsx";

import "./App.css";
import SignUp from "./pages/SignUp";
import Lessons from "./pages/Lessons/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import Home from "./pages/Home/Index.tsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/alphabet" element={<Temp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
