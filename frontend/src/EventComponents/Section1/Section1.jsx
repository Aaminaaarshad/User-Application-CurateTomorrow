import './Section1.css'
import { Link ,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import img1 from '../../assets/EventCreater/Capture1.PNG'
import img2 from '../../assets/EventCreater/Capture2.PNG'



const Section1 = () => {
  const navigate = useNavigate()
  const { user }=useSelector((store)=>store.auth)
  // 

  return (
    <div className='sec1'>

      <div className='sec1Left'>
        <ul>
        {user ? (<div className='paramSection'> <li>
          <h1>Create a website without limits</h1>
          <button className='btn' onClick={()=>navigate(`/create/${user._id}`)}>Get Started</button>
        </li></div>) : (
          <div className='paramSection'>
          <li>
          <h1>Create a website without limits</h1>       
          </li>
          <h2>Sign Up Now</h2>

        <li className='btn1'>
        <button className='btn btn1' onClick={()=>navigate('/register')}>Get Started</button>
        </li>
        </div>
        )}
      </ul>
      </div>

    <div className='sec1Right'>
      <img width='5vw' height='5vh' src={img2}></img>
      <img width='5vw' height='5vh' src={img1}></img>
    </div>
    </div>
  )
}

export default Section1
