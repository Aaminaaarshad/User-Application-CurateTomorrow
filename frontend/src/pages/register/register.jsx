import Header from "../../components/header/header"
import "./register.css"
import React ,{useState} from "react"
import axios from "axios"
import {RiFacebookCircleLine, RiLinkedinLine, RiTwitterLine, RiInstagramLine} from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"





const Register = () => {
  const navigate = useNavigate()


const [data, setdata] = useState({
  email:'',fullName:'',
  organizationType:'',
  organizationName:'',
  participationType:'',
   participationReason:'',
    contribute:'',
    delegate_image:'',
   socialMedia_fb:'',
   socialMedia_ln:'',
   socialMedia_in:'',
   socialMedia_tw:'',
   ticketTypenew:'',
   amountPaid:'',
   paymentEmail:'',paymentId:'',paymentMethod:''

})



const ValueUpdater = (e)=>{
    setdata({...data , [e.target.name]:e.target.value})
}

console.log(data)

    const submit =async (e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('email', data.email)
      formData.append('fullName', data.fullName)
      formData.append('organizationName', data.organizationName)
      formData.append('organizationType', data.organizationType)
      formData.append('participationType', data.participationType)
      formData.append('participationReason', data.participationReason)
      formData.append('contribute', data.contribute)
      formData.append('delegate_image', data.delegate_image)
      formData.append('socialMedia_fb', data.socialMedia_fb)
      formData.append('socialMedia_ln', data.socialMedia_ln)
      formData.append('socialMedia_in', data.socialMedia_in)
      formData.append('socialMedia_tw', data.socialMedia_tw)
      formData.append('ticketTypenew', data.ticketTypenew)
      formData.append('paymentEmail', data.paymentEmail)
      formData.append('paymentId', data.paymentId)
      formData.append('paymentMethod', data.paymentMethod)

      const config = {
        header:{
          'content-type': 'multipart/form-data'

        }
      }
      const {email,fullName,organizationName,organizationType,participationType,participationReason,contribute,delegate_image,ticketTypenew} = data
      if(email==='' || fullName==='' || organizationName===''|| organizationType==='' || participationType===''|| participationReason===''|| contribute==='' || delegate_image==='' ||ticketTypenew==='' ){
        toast.info('Please fill all fields')
      }
      else{
        try{
          const response =  await axios.post('https://curatetomorrow.fori.co/delegate', formData, config)
          if(response.status===200 && response.statusText==="OK"){
            navigate("/demo/thankyou")
          }
        }
        catch(err){
          toast.error(err.message)
        }

      }


   
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
          <p>Organization Type</p>

          <div>
          <div>
            <input type="radio" id="Government" name="organizationType" value="Government" onChange={ValueUpdater}/>
            <label htmlFor="Government">Government</label>
          </div>

          <div>
            <input type="radio" id="Private" name="organizationType" value="Private" onChange={ValueUpdater}/>
            <label htmlFor="Private">Private</label>
          </div>

          <div>
            <input type="radio" id="Public" name="organizationType" value="Public" onChange={ValueUpdater}/>
            <label htmlFor="Public">Public</label>
          </div>

          <div>
            <input type="radio" id="Academia" name="organizationType" value="Academia" onChange={ValueUpdater}/>
            <label htmlFor="Academia">Academia</label>
          </div>

          <div>
            <input type="radio" id="Startup" name="organizationType" value="Startup" onChange={ValueUpdater}/>
            <label htmlFor="Startup">Startup</label>
          </div>

          <div>
            <input type="radio" id="Student" name="organizationType" value="Student" onChange={ValueUpdater}/>
            <label htmlFor="Student">Student</label>
          </div>

          <div>
            <input type="radio" id="Other" name="organizationType" value="Other" onChange={ValueUpdater}/>
            <label htmlFor="Other">Other</label>
          </div>
          </div>
        </div>



        <div className="radioDiv">
          <p>Type Of Participation</p>

          <div>
          <div>
            <input type="radio" id="Invited Delegate" name="participationType" value="Invited Delegate" onChange={ValueUpdater}/>
            <label htmlFor="Invited Delegate">Invited Delegate</label>
          </div>

          <div>
            <input type="radio" id="Leading Sponsor" name="participationType" value="Leading Sponsor" onChange={ValueUpdater}/>
            <label htmlFor="Leading Sponsor">Leading Sponsor</label>
          </div>

          <div>
            <input type="radio" id="Partner" name="participationType" value="Partner" onChange={ValueUpdater}/>
            <label htmlFor="Partner">Partner</label>
          </div>
            
          <div>      
            <input type="radio" id="Applicant Delegate" name="participationType" value="Applicant Delegate" onChange={ValueUpdater}/>
            <label htmlFor="Applicant Delegate">Applicant Delegate</label>
          </div>

        </div>
        </div>
        </div>

        <div className="reason">
            <div>
            <p>Why Would You Like To Participate In Curate Tomorrow Event?</p>
            <textarea name="participationReason" id="participationReason" value={data.participationReason} rows="3.5" onChange={ValueUpdater}></textarea>
            </div>
            <div>
            <p>How Would You Like To Contribute Towards Curating Tomorrow?</p>
            <textarea name="contribute" id="contribute" rows="3.5"  value={data.contribute}  onChange={ValueUpdater}></textarea>
            </div>
        </div>

        <div className="imageInput">
          <div>
          <p>Please Attach Your Latest Photograph</p>
          <label htmlFor="image"><img src={require('../../assets/icons/photo.png')} alt="" /></label>
          </div>
          <input type="file" id="image" accept="image/*" name="delegate_image" onChange={(e)=>setdata({...data,["delegate_image"]:e.target.files[0]})}/>
        </div>

        <div className="socialBox">
          <div className="social">
            <label htmlFor="Facebook"><RiFacebookCircleLine/> Facebook</label>
            <input type="text" name="socialMedia_fb" value={data.socialMedia_fb} onChange={ValueUpdater}/>
          </div>
          <div className="social">
            <label htmlFor="LinkedIn"><RiLinkedinLine/> LinkedIn</label>
            <input type="text" name="socialMedia_ln" value={data.socialMedia_ln} onChange={ValueUpdater}/>
          </div>
          <div className="social">
            <label htmlFor="Instagram"><RiInstagramLine/> Instagram</label>
            <input type="text" name="socialMedia_in" value={data.socialMedia_in} onChange={ValueUpdater}/>
          </div>
          <div className="social">
            <label htmlFor="Twitter"><RiTwitterLine/> Twitter</label>
            <input type="text" name="socialMedia_tw" value={data.socialMedia_tw} onChange={ValueUpdater}/>
          </div>
        </div>

        <div className="radioDiv">
          <p>Select Regitration Type:</p>
          <div>
          <div>
            <input type="radio" id="CorporateDelegate" name="ticketTypenew" value="CorporateDelegate 1000" onChange={ValueUpdater}/>
            <label htmlFor="CorporateDelegate">Corporate Delegate ($1000)</label>
            </div>

            <div>
            <input type="radio" id="UniversityDelegate" name="ticketTypenew" value="UniversityDelegate 250" onChange={ValueUpdater}/>
            <label htmlFor="UniversityDelegate">University Delegate ($250)</label>
            </div>

            <div>
            <input type="radio" id="StudentDelegate" name="ticketTypenew" value="StudentDelegate 50" onChange={ValueUpdater}/>
            <label htmlFor="StudentDelegate">Student Delegate ($50)</label>
            </div>

            <div>
            <input type="radio" id="Delegate" name="ticketTypenew" value="Delegate" onChange={ValueUpdater}/>
            <label htmlFor="Delegate">Delegate (Choose Amount)</label>
            </div>
            <input type="number" placeholder="Amount" name="amountPaid" onChange={ValueUpdater}/>
            </div>
        </div>

        <button type="submit" className="submitBtn" onClick={submit}>Submit</button>
      </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register;