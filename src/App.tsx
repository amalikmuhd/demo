import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Eligibility } from "./pages/Eligibility";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="eligibility" element={<Eligibility />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="success" element={<Success />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
