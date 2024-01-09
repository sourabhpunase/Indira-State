import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
{  username: {
    type:String,
    required:true,
    unique:true,



    },
    email: {
        type:String,
        required:true,
        unique:true,
        
    
    
        },
        password: {
            type:String,
            required:true,
         
            
        
        
            }
,
            avatar:{
 type:String,
     default :"https://media.licdn.com/dms/image/D5603AQEW9h9OsSXZhg/profile-displayphoto-shrink_400_400/0/1701176783266?e=2147483647&v=beta&t=88BXxpKiNLm1pBA6GvschPu3Cvwq9JDBklTpIqnCUYM"           
            }

},{timestamps:true}    );

const User=mongoose.model('User',userSchema);

export default User;