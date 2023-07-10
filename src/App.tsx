import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
// import Temp from "./pages/Temp";
import Header from "./components/Header";
import Footer from "./components/Footer"
=======
import Temp from "./pages/Temp";
import SignIn from "./pages/SignIn/index.tsx";
>>>>>>> 044ceac8cc61b0838ef9288ae66ecc799557f77a

import "./App.css";
import SignUp from "./pages/SignUp";
import Lessons from "./pages/Lessons/index.tsx";
import Profile from "./pages/Profile/index.tsx";

function App() {
  return (
<<<<<<< HEAD
    <>
      <Routes>
        {/* <Route path="/" element={<Temp/>} /> */}
        {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/" element={<Footer/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
=======
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/lessons/alphabet" element={<Temp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
>>>>>>> 044ceac8cc61b0838ef9288ae66ecc799557f77a
  );
}

export default App;
