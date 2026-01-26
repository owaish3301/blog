import { Route, Routes } from "react-router";
import MainLayout from "./pages/MainLayout";
import Auth from "./pages/Auth";
import SignIn from "./components/authPages/SignIn";
import SignUp from "./components/authPages/SignUp";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import NewPost from "./pages/NewPost";


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/new-post" element={<NewPost />}></Route>
      </Route>
      <Route element={<Auth />}>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}
