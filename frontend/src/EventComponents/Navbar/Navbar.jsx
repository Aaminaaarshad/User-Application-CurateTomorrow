import icon from '../../assets/logo/forilogo.png'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout,reset} from '../../features/authSlice/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user }=useSelector((store)=>store.auth)

  const onLogout =()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header className='navbar'>
      <div className='navbar-left'>
            <div className='logo'>
                <img src={icon}/>
            </div>
            <ul>
        {user ? ( <li>
          <Link to='/demo'>Demo</Link>
          <Link to={`/create/${user._id}`}>Creation</Link>

          {/* <button className='btn btnnn' onClick={()=>navigate(`/create/${user._id}`)}>Creation</button> */}
        </li>) : (
          <>
          <li>
          <Link to='/register'>Creation</Link>
          <Link to='/demo'>Demo</Link>
        </li>
        </>
        )}  
      </ul>
            
        </div>
      <div className="navbar-right">
      <ul>
        {user ? ( <li>
          <button className='btn' onClick={onLogout}>Logout</button>
        </li>) : (
          <>
          <li>
          <Link to='/login'>Login</Link>
          <button className='btn btnnn' onClick={()=>navigate('/register')}>Get Started</button>
        </li>
        </>
        )}  
      </ul>
      </div>
    </header>
  )
}

export default Navbar
