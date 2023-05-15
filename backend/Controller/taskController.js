const asyncHandler = require('express-async-handler')
const UserInfo = require('../Model/taskModel')
const User = require('../Model/userModel')


////////////Post Form//////Create Form///////////////
const createForm = asyncHandler(async(req,res)=>{
    console.log(req.files,'files');
    console.log(req.files.companyLogo,'companyLogo files');
    const {eventName,eventDate,eventCountry,eventLocation,eventSlogan,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc} = req.body
    try {
        const fileName = req.files. partnersImage;
        console.log(fileName,'filename');
        const newTask = await UserInfo.create({eventName,eventDate,eventCountry,eventLocation,eventSpeakers:`${fileName}`,eventSlogan,companyLogo:req.files.companyLogo,eventLogo:req.files.eventLogo,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc,partnersImage:req.files.partnersImage})
        console.log(newTask,'newTask')
        if(newTask){
            res.status(200).json(newTask)
        }else{
            res.status(400)
            throw new Error("task not created")
        }
    } catch (error) {
        console.log(error);
    }
})


module.exports = { createForm }