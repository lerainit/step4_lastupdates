import express from "express";
import { getUsers,addNewSubscriber,becomeFollower,unFollow,removeSubscriber } from "./userControllers.js";


const userRouter = express.Router()


userRouter.get('',getUsers)

userRouter.put('/subscribers',addNewSubscriber)
userRouter.put('/follower',becomeFollower)
userRouter.put('/follower/unfollow',unFollow)
userRouter.delete('',removeSubscriber)

export default userRouter