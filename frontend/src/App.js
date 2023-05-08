import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
import Demo from "./Demo";
import MainSection from "./MainSection";


function App() {
  return (
    <div className="Demo">
      <MainSection/>
      {/* <Demo/> */}
  </div>
  );
}

export default App;
