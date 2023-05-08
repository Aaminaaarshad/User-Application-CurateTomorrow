const mongoose = require('mongoose')
const imageSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"]
    },
    description:{
        type:String,
        required:[true,"Please add desc"],
    },
    image:{
        type:String,
        // required:[true,"Please add a image"]
    }
},{timestamps:true})
module.exports = mongoose.model('ImgModel',imageSchema)