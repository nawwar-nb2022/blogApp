import { model, Schema } from "mongoose";

const BlogSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    snippet : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
})

export const blogs  = model("blogs" , BlogSchema)