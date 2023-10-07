import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThreeD from "./components/threeD/threeD";
import Home from "./components/Home/home";

function App() {
  return (
    // <div className='app'>home</div>

    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d" element={<ThreeD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
