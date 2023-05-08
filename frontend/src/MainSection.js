import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Main from './EventPages/Main/Main'
import Login from './EventPages/Login/Login'
import Register from './EventPages/Register/Register'
import CreateForm from './EventPages/CreateForm/CreateForm'
import Home from './pages/home/home'
import RegisterCurate from './pages/register/register'
import Sponsor from './pages/Sponsor/Sponsor'
import Thankyou from './pages/Thankyou/Thankyou'


const MainSection = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create/:id" element={<CreateForm/>}/>

          <Route path='/demo' element={<Home />}/>
          <Route path='/demo/register-delegate' element={<RegisterCurate />} /> {/*A nested route!*/}
          <Route path='/demo/register-sponsor' element={<Sponsor />} /> {/*A nested route!*/}
          <Route path='/demo/thankyou' element={<Thankyou />} /> {/*A nested route!*/}
        </Routes>
      </Router>
    </div>
  )
}

export default MainSection
