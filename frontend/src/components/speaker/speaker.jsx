import { speakers } from "../../assets/data"
import "./speaker.css";
const Speaker = () => {
  return (
    <div className="speakers-container">
        <h2>Speakers</h2>
        <h6>World Class Speakers</h6>
        <div className="speaker-cards-parent">
        {speakers.map((speaker)=>{
            return(
                <div className='speaker-card' key={speaker.name}>
                    <div className="speaker-img"> 
                    <img src={speaker.img}alt="speaker"/>
                    </div>
                    <p>{speaker.name}</p>
                    <div>
                    <span>{speaker.designation}</span><span> | </span><span>{speaker.company}</span>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Speaker