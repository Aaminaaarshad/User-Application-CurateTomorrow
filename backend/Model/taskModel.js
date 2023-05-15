const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    // user:{
    //     type: String,
    //     required:true,
    // },
    eventName:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventDate:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventCountry:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventSlogan:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    companyLogo:{
        type:Array,
    },
    eventLogo:{
        type:Array,
        required:[true,"Please Provide Task Name"]
    },
    eventSpeakers:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventWorkshops:{
        type:String,
        required:[true,"Please Provide Task Name"]
    }
    ,eventAttendees:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventAbout:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventMotive:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventPurpose:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    eventDesc:{
        type:String,
        required:[true,"Please Provide Task Name"]
    },
    partnersImage:{
        type:Array,
        required:[true,"Please Provide Task Name"]
    },
},{timestamps:true})


module.exports = mongoose.model('UserInfo',taskSchema)