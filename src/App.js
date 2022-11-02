import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./pages/components/Footer";
import { Navbar } from "./pages/components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
