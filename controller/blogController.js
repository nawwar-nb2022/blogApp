import { blogs } from "../models/Blogs.js"

export const blog_index = (req , res)=>{
    blogs.find().sort({ createdAt : -1 })
    .then(
        result =>{
            res.render("index.ejs" , {name : "home" , blogs : result})
        }
    )
}

export const blog_about = (req , res)=>{
    res.render("about.ejs" , {name : "about"})
}
export const blog_new =(req ,res)=>{
    res.render("create.ejs" , {name :"New blog"})
}

export const blog_new_post = (req ,res)=>{
    const newData = new blogs(req.body)
    newData.save()
        .then(result =>{
            res.redirect("/")
        })
        .catch(err=>{
            res.send(err)
        })

}
export const blog_single = (req ,res) =>{
   const  id = req.params.id 
    blogs.findById(id)
        .then(result =>{
            res.render("single.ejs" , {name : result.title , data : result})
        })
        .catch(err=>{
            res.send(err)
        })
}

export const blog_delete = (req , res)=>{
    const id = req.params.id
    blogs.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect:"/"})
        })
        .catch(err=>{
            res.send(err)
        })
}

export const blog_update =(req , res)=>{
    const id = req.params.id 
    blogs.findById(id)
        .then(result=>{
            res.render("update.ejs" , {name : "update" , data : result})
        })
        .catch(err=>{
            res.send(err)
        })
}

export const blog_update_post =(req, res)=>{
    const id = req.params.id
    blogs.findByIdAndUpdate(id , req.body)
        .then(result=>{
            res.redirect("/")
        })
        .catch(err=>{
            res.send(err)
        })
}