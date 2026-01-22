import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import SignIn from "./components/authPages/SignIn";
import SignUp from "./components/authPages/SignUp";


export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route element={<Auth />}>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}
