import "./featured.css";
import { osolopic } from "../../assets/data";
import {useState } from "react";
import pic1 from "../../assets/featured/1.jpg";
import pic2 from "../../assets/featured/2.jpg";
import pic3 from "../../assets/featured/3.jpg";
import pic4 from "../../assets/featured/4.jpg";
import pic5 from "../../assets/featured/5.jpg";
import pic6 from "../../assets/featured/6.jpg";
import {AiOutlinePlus} from "react-icons/ai";
import {RiArrowLeftSFill} from "react-icons/ri";
import {RiArrowRightSFill} from "react-icons/ri";
import {ImCancelCircle} from "react-icons/im"

const Feautred = () => {
    const [imgid,setImgid]=useState(1);
    const [showLink,setShowlink]=useState({1:false,2:false,3:false,4:false,5:false,6:false});
    const [imgSlider,setImgSlider]=useState(false);
    
    // show images slider
    const showSlider=(e)=>{
        e.preventDefault();
        setImgSlider(true);
    }
    // previmg
    const previmg=()=>{
        if(imgid!==1 && imgid<7 && imgid>1){
            setImgid(imgid-1)
        }else{
            setImgid(6)
        }
    }
    // nextimg
    const nextimg=()=>{
        if(imgid<6 && imgid>0){
            setImgid(imgid+1)
        }else{
            setImgid(1)
        }
    }
// plus sign to be shown on hovering
    const mouseEnter =(e)=>{
        setShowlink({1:false,2:false,3:false,4:false,5:false,6:false,[e.target.id]:true})
    }
// plus sign should disappear on not hovering
    const MouseLeave =(e)=>{
        setShowlink({1:false,2:false,3:false,4:false,5:false,6:false,[e.target.id]:false})
    }
    
  return (<>
    <div className="feature-p">
        {osolopic.map((pic)=>{
            return(
                <div className="feature-card" key={pic.id}>
                    <img key={pic.id} src={pic.img} alt="event" id={pic.id} onMouseEnter={mouseEnter}  onMouseLeave={MouseLeave}/>
                    <div className={showLink[pic.id]===true?"plus-img":"plus-img-none"} id={pic.id} onMouseEnter={mouseEnter} onMouseLeave={MouseLeave}>
                        <button type="button" className="plus-sign" name={pic.id} onClick={(e)=>{showSlider(e);setImgid(Number(pic.id))} }><AiOutlinePlus/></button>
                    </div>
                </div>
            )
        })}
    </div>
    {imgSlider?<>
    <div className="img-slider" id="slider-div"onClick={(e)=>{if(e.target.id==="slider-div"){setImgSlider(!imgSlider)}}}>
            <button onClick={previmg}><RiArrowLeftSFill/></button>
            <div>
            <button className="cancel-btn" onClick={()=>{setImgSlider(!imgSlider)}}><ImCancelCircle /></button>
            <img src={imgid===1?pic1:imgid===2?pic2:imgid===3?pic3:imgid===4?pic4:imgid===5?pic5:pic6} alt="event" onClick={nextimg}/>
            <h1>{imgid} of 6</h1>
            </div>
            <button onClick={nextimg}><RiArrowRightSFill/></button>
        </div>
        </>:null}
    </>
  )
}

export default Feautred