import logo from "./logo.svg";
// import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RateInput from "./components/Blocktitle/RateInput";
import Platform from "./components/platforms/Platform";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RateInput />
      <Platform />
    </div>
  );
}

export default App;
