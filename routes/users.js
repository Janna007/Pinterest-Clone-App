const mongoose=require('mongoose')
const plm=require('passport-local-mongoose')


// MONGODB_URI="mongodb+srv://jannakondeth5:janna123@cluster0.iwh2ys0.mongodb.net/"

mongoose.connect("mongodb+srv://jannakondeth5:janna123@cluster0.iwh2ys0.mongodb.net/pinbase")


const userSchema=mongoose.Schema({
    username:String,
    name:String,
    email:String,
    password:String,
    profileImage:String,
    contact:Number,
    boards:{
      type:Array,
      default:[]
    },
    posts:[
      {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Post"
      
    }
  ]
    
})

userSchema.plugin(plm)

module.exports=mongoose.model("User",userSchema)