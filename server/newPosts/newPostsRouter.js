import express from "express";
import { getNewPosts } from "./newPostsController.js";

const newPostsRouter = express.Router()


newPostsRouter.get('',getNewPosts)

export default newPostsRouter