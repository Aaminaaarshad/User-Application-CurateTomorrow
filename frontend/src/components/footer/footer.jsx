import "./footer.css";
import {BsInstagram,BsLinkedin} from "react-icons/bs";
import {MdMail} from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <a href="#hero"><img src={require("../../assets/logo/fori-company-white.png")} alt="logo"/></a>
        <div className="footer-icons">
            <a className="icons-a" href="https://www.instagram.com/accounts/login/?next=/fori_inc/"><BsInstagram className="icons-circle"/></a>
            <a className="icons-a" href="https://www.linkedin.com/company/foriinc/"><BsLinkedin className="icons-circle"/></a>
            <a className="icons-a" href="mailto:someone@example.com"><MdMail className="icons-circle"/></a>
            <a className="icons-a" href="mailto:someone@example.com"><MdMail className="icons-circle"/></a>
        </div>
        <div className="call-div">
            <h6>Or Call On:</h6>
            <a href="tel:+47 407 17 345">+47 407 17 345 </a>
            <p>|</p>
            <a href="tel:+1 914 416 5380"> +1 914 416 5380 </a>
        </div>
        <p>2022 © Copyrights Fori Inc. All Rights Reserved</p>
    </footer>
  )
}

export default Footer