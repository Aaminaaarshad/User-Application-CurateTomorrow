const express = require('express')
const dotenv = require ('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 5001
const connectDB = require('./DB/DB')
const applicationRoutes = require('./Routes/taskRoutes')
const userRoutes = require('./Routes/userRoutes')
const {errorMiddleware} = require('./Middleware/errorMiddleware')
const ImgModel = require('./Model/imageModel')
const UserInfo = require('./Model/taskModel')
const asyncHandler = require('express-async-handler')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



const path = require('path')
const multer = require('multer')
const { log } = require('console')

app.use('/Images', express.static(path.join(__dirname, 'Images')));

var storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    },
    filename:(req,file,cb)=>{
        console.log(file,'file');
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload=multer({storage:storage})
app.set('view engine','ejs')
// [{ name: 'companyLogo', maxCount: 1 }, { name: 'eventLogo', maxCount: 1 }, { name: 'partnersImage', maxCount: 8 }]
app.post('/createForm',upload.fields([{name:'companyLogo'},{name:'eventLogo'},{name:'partnersImage'}]),asyncHandler(async(req,res)=>{
    console.log(req.files,'files');
    console.log(req.files.companyLogo,'companyLogo files');



    //   const {companyLogo,eventLogo,partnersImage} = req.file

    const {eventName,eventDate,eventCountry,eventLocation,eventSlogan,eventWorkshops,eventAttendees,eventAbout,eventMotive,eventPurpose,eventDesc} = req.body
   

    // console.log(req.body,'body');
    // if(!req.body){
    //     res.status(400)
    //     throw new Error("please provide user information")
    // }
   
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
    

}))





// app.use('/api/application',applicationRoutes)
app.use('/api/user',userRoutes)



app.use(errorMiddleware)

app.get('/',(req,res)=>{
    res.send('server is running')
})

const start=async()=>{
    await connectDB()
    app.listen(PORT ,()=>console.log(`server is listening at port ${PORT}`))
}

start()