const express = require('express')
const router = express.Router()
const {getAllTasks, getSingleTask, createForm, deleteTask, updateTask} = require('../Controller/taskController')
const protect =require('../Middleware/authMiddleware')


// router.get('/getAllTasks', protect, getAllTasks)
// router.get('/getSingleTask/:id',getSingleTask)
// router.post('/createTask/:id', protect,createTask)
// router.delete('/deleteTask/:id', protect,deleteTask)
// router.patch('/updateTask/:id', protect,updateTask)
router.post('/createForm',createForm)


module.exports = router