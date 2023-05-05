import "./App.css";
import Navbar from "./components/nabvar";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column">
      <main className="flex-shrink-0">
        <HashRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </HashRouter>
      </main>
    </div>
  );
}

export default App;
