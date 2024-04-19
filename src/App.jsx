import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import './App.css'
import Residencies from "./components/Residencies/Residencies";
import Companies from './components/Companies/Companies'
function App() {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"></div>
      <Header />
      <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
