import './App.css';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Navbar from './pages/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
