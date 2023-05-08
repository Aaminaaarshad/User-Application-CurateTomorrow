import "./partners.css";
import { partners } from "../../assets/data";

const Partners = () => {
  return (
    <div className="partner-container">
        <h6>Event Partners</h6>
        <div className="partners-card-parent">
            {partners.map((partner)=>{
                return(
                <div className="partner-img">
                    <img src={partner.img} alt="partner"/>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Partners