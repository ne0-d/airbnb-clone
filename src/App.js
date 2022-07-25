import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css';

function App() {
  return (

    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <Card 
        img="katie-zeferes.png"
        rating = "4.0"
        reviewCount = {100}
        title = "Life lessons with Katie Zaferes"
        price = {136}
        country = "USA"
      />
    </div>
  );
}

export default App;
