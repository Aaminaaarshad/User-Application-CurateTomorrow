const asyncHandler = require('express-async-handler')
const UserInfo = require('../Model/taskModel')
const User = require('../Model/userModel')


// ==============create Form=========
const createForm = asyncHandler(async(req,res)=>{
    const {eventName,eventDate,eventCountry,eventLocation,eventSlogan,companyLogo,eventLogo,eventSpeakers,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc,partnersImage} = req.body

    console.log(req.body,'body');
    if(!req.body){
        res.status(400)
        throw new Error("please provide user information")
    }
    const newTask = await UserInfo.create({eventName,eventDate,eventCountry,eventLocation,eventSlogan,eventSpeakers,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc})
    console.log(newTask,'newTask')
    if(newTask){
        res.status(200).json(newTask)
    }else{
        res.status(400)
        throw new Error("task not created")
    }
})


module.exports = { createForm }