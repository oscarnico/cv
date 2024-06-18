import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Cv from "./components/cv/Cv";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Cv" element={<Cv />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
