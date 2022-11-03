import express from "express";
import { getPosts,addNewPost, addLikes,deletePost,addComments } from "./postsControllers.js";

const postsRouter = express.Router()


postsRouter.get('',getPosts)

postsRouter.post('',addNewPost)
postsRouter.put('/likes/:index',addLikes)

postsRouter.put(`/comments/:index`,addComments)

postsRouter.delete('/:index',deletePost)

export default postsRouter