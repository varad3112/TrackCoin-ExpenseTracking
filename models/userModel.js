const mongoose = require(`mongoose`)


// Database schema Design
const userSchema = new mongoose.Schema({
name:{type:String,
    required:[true,`name is required`]
    },
    email:{
        type:String,
        required:[true,`email is required and must be unique`]
    },
    password:{
        type:String,
        required:[true,`password is required`]
    }
},{timestamps: true})

//export

const userModel = mongoose.model('users',userSchema)
module.exports = userModel