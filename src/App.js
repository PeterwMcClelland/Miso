import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroPage from "./components/Hero/HeroPage";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
