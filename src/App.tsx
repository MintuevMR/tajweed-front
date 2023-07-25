import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/Lessons/NotFound/index.tsx";

import Temp from "./pages/Temp";
import SignIn from "./pages/SignIn/index.tsx";
import Azkary from "./pages/Azkary/index.tsx";
import Morning from "./pages/Azkary/morning.tsx";
import Evening from "./pages/Azkary/evening.tsx";

import Bookmark from "./pages/Bookmark/index.tsx";
import Groups from "./pages/Groups/index.tsx";

import "./App.css";
import SignUp from "./pages/SignUp";
import Lessons from "./pages/Lessons/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import Home from "./pages/Home/Index.tsx";
import { useSelector } from "react-redux";
import Voting from "./pages/Temp/voting.tsx";
import Forms from "./pages/Temp/forms.tsx";

import { RootState } from "./redux/store/store.ts";

import Madda from "./pages/Temp/madda.tsx";
import Sukun from "./pages/Temp/sukun.tsx";
import Tanvin from "./pages/Temp/tanvin.tsx";
import Tashdid from "./pages/Temp/tashdid.tsx";

function App() {
  const token = useSelector((state: RootState) => state.application.token);

  return (
    !token ? (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={ <Navigate to="/login"/>} />
        <Route path="/azkary" element={ <Navigate to="/login"/>} />
        <Route path="/lessons" element={ <Navigate to="/login"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/login" element={ <Navigate to="/profile"/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/alphabet" element={<Temp />} />
        <Route path="/lessons/voting" element={<Voting/>} />
        <Route path="/lessons/forms" element={<Forms/>} />
        <Route path="/lessons/madda" element={<Madda/>} />
        <Route path="/lessons/sukun" element={<Sukun/>} />
        <Route path="/lessons/tanvin" element={<Tanvin/>} />
        <Route path="/lessons/tashdid" element={<Tashdid/>} />
        <Route path="/azkary" element={<Azkary />} />
        <Route path="/azkary/morning" element={<Morning />} />
        <Route path="/azkary/evening" element={<Evening />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  );
}
export default App;
