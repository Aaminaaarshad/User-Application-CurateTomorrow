import "./header.css";
import {useState,useEffect} from "react";

const Header = () => {

  const [showH, setShowH] = useState(false);
const handleScroll = () => {
    const position = window.pageYOffset;
    if(position>90){
      setShowH(true)
    }else{
      setShowH(false)
    }

};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [window.pageYOffset]);

  return (
  <>{showH===true?<><div className='header-simple sbrflex'>
      <img src={require('../../assets/logo/fori-company-white.png')} alt="logo"/>
      <img src={require('../../assets/logo/logo.png')} alt="logo"/>
    </div>
    </>:null}</>
  )
}

export default Header;