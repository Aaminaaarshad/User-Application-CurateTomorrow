import Header from "../../components/header/header"
import '../register/register.css'
import React ,{useState} from "react"
import axios from "axios"


const Sponsor = () => {

const [data, setdata] = useState({
  email:'',fullName:'',
  organizationType:'',
  organizationName:'',
  ticketTypenew:'',

})



const ValueUpdater = (e)=>{
    setdata({...data , [e.target.name]:e.target.value})
}

console.log(data)

    const submit =async (e)=>{
      e.preventDefault()
      await axios.post('https://curatetomorrow.fori.co/sponsor', data).then((response)=>console.log(response))

   
    }

  return (
    <div className="RigisterFormParent">
      <Header/>
      <div className='header-register'>
        <div>
          <img  src={require('../../assets/logo/fori-company-white.png')} alt="logo"/>
       </div>
       <h1>Register as a Delegate</h1>
      </div>
      
      <div className="formParent">
      <form className="registrationForm" encType="multipart/form-data">
        <div className="formInputs">
          <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name='email' value={data.email} onChange={ValueUpdater}/>
          </div>

          <div>
          <label htmlFor="OrganizationsName">Organizations Name</label>
          <input type="text" id="organizationName" name='organizationName' value={data.organizationName} onChange={ValueUpdater}/>
          </div>

          <div>
          <label htmlFor="FullName">Full Name</label>
          <input type="text" id="fullName" name='fullName' value={data.fullName} onChange={ValueUpdater}/>
          </div>
        </div>

        <div className="formOptions">
        <div className="radioDiv">
          <p>Select Sponsor Type</p>

          <div>
          <div>
            <input type="radio" id="Primary" name="ticketTypenew" value="Primary" onChange={ValueUpdater}/>
            <label htmlFor="Primary">Primary ($3000)</label>
          </div>

          <div>
            <input type="radio" id="SilverPartner" name="ticketTypenew" value="SilverPartner" onChange={ValueUpdater}/>
            <label htmlFor="SilverPartner">Silver Partner ($8000)</label>
          </div>

          <div>
            <input type="radio" id="GoldPartner" name="ticketTypenew" value="GoldPartner" onChange={ValueUpdater}/>
            <label htmlFor="GoldPartner">Gold Partner ($15000)</label>
          </div>

          <div>
            <input type="radio" id="PlatinumPartner" name="ticketTypenew" value="PlatinumPartner" onChange={ValueUpdater}/>
            <label htmlFor="PlatinumPartner">Platinum Partner ($30000)</label>
          </div>

          <div>
            <input type="radio" id="PoweredBy" name="ticketTypenew" value="PoweredBy" onChange={ValueUpdater}/>
            <label htmlFor="PoweredBy">Powered By ($60000)</label>
          </div>

          </div>
        </div>
        </div>

        <button type="submit" className="submitBtn" onClick={submit}>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Sponsor;