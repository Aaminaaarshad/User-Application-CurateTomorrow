import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/footer";
import Home from "./pages/home/home"
import Register from "./pages/register/register"
import Sponsor from "./pages/Sponsor/Sponsor"
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Thankyou from "./pages/Thankyou/Thankyou";

function Demo() {
  return (
    <div className="Demo">
      <Router>
            <Routes>
                <Route path='/demo' element={<Home />}/>
                    <Route path='/demo/register-delegate' element={<Register />} /> {/*A nested route!*/}
                    <Route path='/demo/register-sponsor' element={<Sponsor />} /> {/*A nested route!*/}
                    <Route path='/demo/thankyou' element={<Thankyou />} /> {/*A nested route!*/}
            </Routes>
        </Router>

      {/* <Footer/> */}
    </div>
  );
}

export default Demo;



{/* <Router>
        <ScrollToTop/>
        <Routes>
           <Route path="/demo" element={<Home/>}>
            <Route path='/register-delegate' element={<Register/>} /> 
            <Route path='register-sponsor' element={<Sponsor/>} /> 
            <Route path='thankyou' element={<Thankyou/>} /> 
           </Route> */}
          {/* <Route path="/register-delegate" element={<Register/>}/>
          <Route path="/register-sponsor" element={<Sponsor/>}/>
          <Route path="/thankyou" element={<Thankyou/>}/> */}
    //     </Routes>
    //   </Router>