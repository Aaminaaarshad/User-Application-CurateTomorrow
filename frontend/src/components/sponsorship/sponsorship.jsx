import React from 'react';
import {Link} from "react-router-dom";
import "./sponsorship.css";

const Sponsorship = () => {
  return (
    <div className='sponsorhip-section'>
        <h1>Sponsorship</h1>
        <h6>Join Us Now</h6>
        <div className="sponsorship-card-parent">
            <div className="spnsorship-card spnsorship-card-y ">
                <div className="sponsorship-h">
                    <h1>Primary</h1>
                    <div className="price price-p">
                        <h2>3000</h2>
                    </div>
                </div>
                <ul>
                    <li>Logo display in Partners</li>
                    <li>One delegate nominee</li>
                </ul>
                <Link to="/register-delegate" className="sponsorship-btn sponso-btn-r">Book Now</Link>
            </div>
            <div className="spnsorship-card spnsorship-card-r">
            <div className="sponsorship-h">
                    <h1>Silver Partner</h1>
                    <div className="price price-s">
                        <h2>8000</h2>
                    </div>
                </div>
                <ul>
                    <li>Logo display in Partners</li>
                    <li>Three delegate nominee</li>
                    <li>Two confirmed delegates</li>
                </ul>
                <Link to="/register-delegate" className="sponsorship-btn sponso-btn-y">Book Now</Link>
            </div>
            <div className="spnsorship-card spnsorship-card-b">
            <div className="sponsorship-h">
                    <h1>Gold Partner</h1>
                    <div className="price price-g">
                        <h2>15,000</h2>
                    </div>
                </div>
                <ul>
                    <li>Logo display in Partners</li>
                    <li>Five delegate nominee</li>
                    <li>Three confirmed delegates</li>
                </ul>
                <Link to="/register-delegate" className="sponsorship-btn sponso-btn-r">Book Now</Link>
            </div>
            <div className="spnsorship-card spnsorship-card-r">
            <div className="sponsorship-h">
                    <h1>Plantinum Partner</h1>
                    <div className="price price-p">
                        <h2>30,000</h2>
                    </div>
                </div>
                <ul>
                    <li>Logo display in Partners</li>
                    <li>Ten delegate nominee</li>
                    <li>Five confirmed delegates</li>
                </ul>
                <Link to="/register-delegate" className="sponsorship-btn sponso-btn-y">Book Now</Link>
            </div>
            <div className="spnsorship-card spnsorship-card-y">
            <div className="sponsorship-h">
                    <h1>Powered By</h1>
                    <div className="price price-s">
                        <h2>60,000</h2>
                    </div>
                </div>
                <ul>
                    <li>Logo display in Partners</li>
                    <li>Twenty delegate nominees</li>
                    <li>Eight confirmed delegates</li>
                    <li>Seat in Selection Committee of Delegates</li>
                </ul>
                <Link to="/register-delegate" className="sponsorship-btn sponso-btn-r">Book Now</Link>
            </div>
        </div>
    </div>
  )
}

export default Sponsorship