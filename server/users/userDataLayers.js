import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
   id: Number,
   name: String,
   nickName: String,
   url: String,
   subscribers: Array,
   info: String,
   isAuth: Boolean,
   isFollower: Boolean
})

const Users = mongoose.model('users', userSchema)


export const getUsersData = async () => {
   const users_db = await Users.find({})

   return users_db
}


export const addNewSubscriberData = async (subscriber, userId) => {
   let usersdb = await Users.findOne({ id: userId })
   usersdb.subscribers.push(subscriber)
   await usersdb.save()
   return usersdb

}

export const removeSubscriberData = async (index, userId) => {
   let usersdb = await Users.findOne({ id: userId })
   usersdb.subscribers.splice(index, 1)
   await usersdb.save()
   return usersdb

}

export const becomeFollowerData = (userId) => {

   Users.findOneAndUpdate({ id: +userId }, { isFollower: true }, { new: true }, (err) => {
      if (err) {
         console.log(err)
      }
      console.log('updated')
   })

}

export const unFollowData = (userId) => {

   Users.findOneAndUpdate({ id: +userId }, { isFollower: false }, { new: true }, (err) => {
      if (err) {
         console.log(err)
      }
      console.log('updated')
   })
}
