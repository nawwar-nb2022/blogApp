import { Router } from "express";
import { blog_about,
        blog_delete,
        blog_index,
        blog_new, 
        blog_new_post, 
        blog_single, 
        blog_update,
        blog_update_post}
     from "../controller/blogController.js";

const router = Router();


router.get("/" , blog_index)

router.get("/about" ,blog_about)

router.get("/blogs/create" , blog_new)

router.post("/blogsCreate" , blog_new_post)

router.get('/blogs/:id' , blog_single)

router.delete("/deleteBlogs/:id" , blog_delete)

router.get("/update/:id" ,blog_update)

router.post("/blogsUpdate/:id" ,blog_update_post)



// 404 page
router.use((req , res)=>{
    res.render("404.ejs" , {name : "404"})
})
export default router;