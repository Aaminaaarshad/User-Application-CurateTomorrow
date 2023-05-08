import "./hero.css"
// import Header from "../header/header";
import {Link} from "react-router-dom";

const Hero = () => {
  
  return (
    <div className="hero" id="hero">
      <div className='header sbrflex'>
      <img className="animate-element" src={require('../../assets/logo/fori-company-white.png')} alt="logo"/>
      <img className="animate-element" src={require('../../assets/logo/logo.png')} alt="logo"/>
    </div>
      <div className="edate">
        <h1 className="animate-element" >26 - 29</h1><h6 className="animate-element">September<br/>2023</h6>
      </div>
      <h4 className="animate-element">Oslo, Norway</h4>
      <h1 className="animate-element">CURATE  TOMORROW!</h1>
      <h6 className="animate-element">A THINK (&DO) TANK FOR CURATING TOMORROW!</h6>
      <div className="registerbtnD animate-element">
        <Link to="/demo/register-delegate" className="registerbtn">Register Now</Link>
        <Link to="/demo/register-sponsor" className="registerbtn">Become a Sponsor</Link>
      </div>
    </div>
  )
}

export default Hero