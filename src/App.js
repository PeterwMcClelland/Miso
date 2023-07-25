import "./App.css";
import HeroPage from "./components/Hero/HeroPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <HeroPage />
      </div>
    </div>
  );
}

export default App;
