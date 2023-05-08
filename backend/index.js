const express = require('express')
const dotenv = require ('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 5001
const connectDB = require('./DB/DB')
const applicationRoutes = require('./Routes/taskRoutes')
const userRoutes = require('./Routes/userRoutes')
const {errorMiddleware} = require('./Middleware/errorMiddleware')
const ImgModel = require('./Model/imageModel')


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
        console.log(file);
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})
app.set('view engine','ejs')

app.post('/api/task/createImage',upload.single('image'),async(req,res)=>{
    console.log(req.body,'bodyyyyyyyyyyy');
   
    try {
        const fileName = req.file.originalname;
        console.log(fileName);
        const {name,description} = req.body
        const newImage = await ImgModel.create({name,description,image:`http://localhost:5000/Images/${fileName}`})
        console.log(newImage);
    res.send(newImage)
    } catch (error) {
        console.log(error);
    }
    

})



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/api/application',applicationRoutes)
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