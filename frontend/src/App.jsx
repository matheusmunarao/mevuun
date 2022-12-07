import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account } from "./pages/Account/Account";
import { Favorites } from "./pages/Favorites/Favorites";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<SignUp />} />
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="meu-perfil" element={<Account />} />
        <Route path="favoritos" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
