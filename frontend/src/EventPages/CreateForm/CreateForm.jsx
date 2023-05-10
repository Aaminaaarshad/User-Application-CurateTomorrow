import './CreateForm.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {createForm, reset} from '../../features/TaskSlice/TaskSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'



const CreateForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch() 


    const [data, setdata] = useState({
        eventName:'',eventDate:'',
        eventCountry:'',
        eventLocation:'',
        eventSlogan:'',
        companyLogo:'',
        eventLogo:'',
        eventSpeakers:'',
        eventWorkshops:'',
        eventAttendees:'',
        eventAbout:'',
        eventMotive:'',
        eventPurpose:'',
        eventDesc:'',
        partnersImage:''
    })

    const onChange =(e)=>{
        setdata({...data , [e.target.name]:e.target.value})
    }
    console.log(data);

    const submit =async (e)=>{
       
        e.preventDefault()
        const formData = new FormData()
        formData.append('eventName', data.eventName)
        formData.append('eventDate', data.eventDate)
        formData.append('eventCountry', data.eventCountry)
        formData.append('eventLocation', data.eventLocation)
        formData.append('eventSlogan', data.eventSlogan)
        formData.append('companyLogo', data.companyLogo)
        formData.append('eventLogo', data.eventLogo)
        formData.append('eventSpeakers', data.eventSpeakers)
        formData.append('eventWorkshops', data.eventWorkshops)
        formData.append('eventAttendees', data.eventAttendees)
        formData.append('eventAbout', data.eventAbout)
        formData.append('eventMotive', data.eventMotive)
        formData.append('eventPurpose', data.eventPurpose)
        formData.append('eventDesc', data.eventDesc)
        formData.append('paymentId', data.paymentId)
        formData.append('partnersImage', data.partnersImage)
  
        const config = {
          header:{
            'content-type': 'multipart/form-data'
  
          }
        }
        
        const {eventName,eventDate,eventCountry,eventLocation,eventSlogan,companyLogo,eventLogo,eventSpeakers,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc,partnersImage} = data
        if(eventName==='' || eventDate==='' || eventCountry===''|| eventLocation==='' || eventSlogan===''|| companyLogo===''|| eventLogo==='' || eventSpeakers==='' || eventWorkshops===''|| eventAttendees===''|| eventAbout===''|| eventMotive===''|| eventPurpose==='' || eventDesc===''|| partnersImage===''){
          toast.info('Please fill all fields')
        console.log('helo');

        }
        else{
          try{
            const userData = {eventName,eventDate,eventCountry,eventLocation,eventSlogan,companyLogo,eventLogo,eventSpeakers,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc,partnersImage}
           dispatch(createForm(userData))
        }
          catch(err){
            toast.error(err.message)
          }
        }
      }


return (
    <div className='body'>
    <div class="formcontainer">
        <header>Please Provide Event Details</header>
        <form>
            <div class="formm first">
                <div class="details">
                    <div class="fields">
                        <div class="input-field">
                            <label>Event Name</label>
                            <input type="text" id='eventName' name='eventName' value={data.eventName} placeholder="Enter your event name" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Event Date</label>
                            <input type="date" id='eventDate' name='eventDate' value={data.eventDate} placeholder="Enter your event date" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Event Country/City</label>
                            <input type="text" id='eventCountry' name='eventCountry' value={data.eventCountry} placeholder="Enter city of the event" required onChange={onChange}/>
                        </div>
  
                        <div class="input-field">
                            <label>Event Location</label>
                            <input type="text" id='eventLocation' name='eventLocation' value={data.eventLocation} placeholder="Enter exact location of the event" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Event Slogan</label>
                            <input type="text" id='eventSlogan' name='eventSlogan' value={data.eventSlogan} placeholder="Enter slogan of the event" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Company Logo</label>
                            <input type="file" id="companyLogo" accept="companyLogo/*" name="companyLogo" onChange={(e)=>setdata({...data,["companyLogo"]:e.target.files[0]})}/>
                        </div>

                        <div class="input-field">
                            <label>Event Logo</label>
                            <input type="file" id="eventLogo" accept="eventLogo/*" name="eventLogo" onChange={(e)=>setdata({...data,["eventLogo"]:e.target.files[0]})}/>
                        </div>
                    </div>
                </div>

                <div class="details">

                    <div class="fields">

                        <div class="input-field">
                            <label>Number of Speakers</label>
                            <input type="number" id='eventSpeakers' name='eventSpeakers' value={data.eventSpeakers} placeholder="Total number of speakers" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Number of Workshops</label>
                            <input type="number" id='eventWorkshops' name='eventWorkshops' value={data.eventWorkshops} placeholder="Total number of workshops" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Number of Attendees</label>
                            <input type="number" id='eventAttendees' name='eventAttendees' value={data.eventAttendees} placeholder="Total number of attendees" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>What is the Event about?</label>
                            <textarea type="text" id='eventAbout' name='eventAbout' value={data.eventAbout} placeholder="Type..." required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Event Motive</label>
                            <textarea type="text" id='eventMotive' name='eventMotive' value={data.eventMotive} placeholder="Motive of the event" required onChange={onChange}/>
                        </div>

                        <div class="input-field">
                            <label>Event purpose</label>
                            <textarea type="text" id='eventPurpose' name='eventPurpose' value={data.eventPurpose} placeholder="Purpose of the event" required onChange={onChange}/>
                        </div>

                    </div>
                </div> 
            </div>

            <div class="formm second">
                <div class="details">

                    <div class="fields">
                        <div class="input-field">
                            <label>Event Description</label>
                            <textarea type="text" id='eventDesc' name='eventDesc' value={data.eventDesc} placeholder="Description of the event" required onChange={onChange}/>
                        </div>

                        {/* <div class="input-field">
                            <label>Event Reference Vedio</label>
                            <input type="file" id="vedio" accept="vedio/*" name="vedio" />
                        </div> */}

                        <div class="input-field">
                            <label>Event Partners</label>
                            <input type="file" multiple="multiple" id="partnersImage" accept="partnersImage/*" name="partnersImage" onChange={(e)=>setdata({...data,["partnersImage"]:e.target.files[0]})}/>
                        </div>
                    </div>
                </div>

                    <div class="buttons">
                        <button class="sumbit" onClick={submit}>
                            <span class="btnText">Submit</span>
                        </button>
                    </div>
            </div>

        </form>
    </div>
</div>
)
}

export default CreateForm