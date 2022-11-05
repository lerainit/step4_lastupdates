import express from "express";
import { resolve } from 'path';
import cors from 'cors'
import postsRouter from './posts/postsRouter.js'
import userRouter from "./users/userRouter.js";



const app = express();

app.use(express.static(resolve('static')))
app.use(express.json({limit: '50mb'}))
app.use(cors())

app.use('/posts',postsRouter)
app.use('/users',userRouter)



export default app