import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import Home from "./Home";
import Profile from "./profile";
import Login from "./Login";
function App() {
  return (
    <div className="app">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile/:userId" element={<Profile/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
