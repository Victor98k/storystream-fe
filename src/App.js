import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/logIn";

import RegisterUser from "./pages/registerUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<RegisterUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
