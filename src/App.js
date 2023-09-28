
import { Home } from "./pages/home/Home";
import { Person } from "@mui/icons-material";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Profile from "./components/profile/Profile";
import {BrowserRouter , Route, Routes} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={ <Home/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/profile/:username" element={ <Profile/> }/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
