import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Nav.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} /> 
    </Routes>
  </>
  );
}

export default App;
