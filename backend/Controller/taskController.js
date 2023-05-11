const asyncHandler = require('express-async-handler')
const UserInfo = require('../Model/taskModel')
const User = require('../Model/userModel')
const express = require('express')

const app = express()
const path = require('path')
const multer = require('multer')
const { log } = require('console')

app.use('/Images', express.static(path.join(__dirname, 'Images')));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{
        // console.log(file.originalname);
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})
app.set('view engine','ejs')



// ==============create Form=========
const createForm = asyncHandler(async(req,res)=>{
    console.log(req,'req');
    console.log(req.file,'file');
    console.log(req.files,'files');

    const {eventName,eventDate,eventCountry,eventLocation,eventSlogan,companyLogo,eventLogo,eventSpeakers,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc,partnersImage} = req.body
    console.log(companyLogo)

    console.log(req.body,'body');
    if(!req.body){
        res.status(400)
        throw new Error("please provide user information")
    }
    try {
        const fileName = req.file;
        // console.log(fileName);
        const newTask = await UserInfo.create({eventName,eventDate,eventCountry,eventLocation,eventSlogan,companyLogo:`http://localhost:5000/Images/${fileName}`,eventLogo:`http://localhost:5000/Images/${fileName}`,eventSpeakers,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc,partnersImage:`http://localhost:5000/Images/${fileName}`})
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


module.exports = { createForm , upload}