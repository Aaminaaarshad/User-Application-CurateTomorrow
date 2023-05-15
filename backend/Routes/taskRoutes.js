const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()
const {getAllTasks, getSingleTask, createForm, deleteTask, updateTask} = require('../Controller/taskController')
const protect =require('../Middleware/authMiddleware')
const UserInfo = require('../Model/taskModel')
// const upload = require('../index')


const app = express()
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




router.post('/createForm',upload.fields([{name:'companyLogo'},{name:'eventLogo'},{name:'partnersImage'}]),createForm)
// router.get('/deleteTask/:id', protect,deleteTask)

// router.patch('/updateTask/:id', protect,updateTask)

module.exports = router