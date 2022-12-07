import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Account } from "./pages/Account/Account";
import { Favorites } from "./pages/Favorites/Favorites";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";

export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Reed">
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="meu-perfil" element={<Account />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path={`game/${game}`} element={<Game />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
