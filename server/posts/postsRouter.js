import express from "express";
import { getPosts, addNewPost, addLikes, deletePost, addComments,removeLikes } from "./postsControllers.js";

const postsRouter = express.Router()


postsRouter.get('', getPosts)

postsRouter.post('', addNewPost)
postsRouter.put('/likes/:index', addLikes)
postsRouter.put('/likes/remove/:index', removeLikes)

postsRouter.put(`/comments/:index`, addComments)

postsRouter.delete('/:index', deletePost)

export default postsRouter