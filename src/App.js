import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
