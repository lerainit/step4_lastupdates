import { getNewPostsData } from "./newPostsDataLayers.js";


export const getNewPosts = (req,res) =>{
    const data = getNewPostsData()
    res.json({status:'success',data})
}