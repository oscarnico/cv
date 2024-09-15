import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Cv from "./components/cv/Cv";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Cv" element={<Cv />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
