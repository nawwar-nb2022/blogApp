import express  from "express"
import router from "./routes/BlogRouter.js";
import {config} from "dotenv"
import mongoose from "mongoose"

config();

const app = express();

mongoose.connect(`mongodb+srv://${process.env.user_mongo}:${process.env.pass_mongo}@cluster0.ptlfu2i.mongodb.net/${process.env.dbName_mongo}?retryWrites=true&w=majority`)
    .then(res =>{
        app.listen(3000);
    })
    .catch(err=>{
        console.log(err);
    })



app.use(express.static("public"));

app.set("view engin" , "ejs");

app.use(express.urlencoded());

app.use(router)