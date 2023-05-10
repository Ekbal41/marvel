import "./App.css";
import "./assets/css/marvel.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./Docs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/*" element={<Docs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
