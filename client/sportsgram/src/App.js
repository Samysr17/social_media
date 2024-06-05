import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Signin from "./Signin";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
