import { incrementLikes, decrementLikes, setCounter } from "./actions";

const initialValue = {
  counter: [],
  isLoading: true

}

const likesReducer = (state = initialValue, action) => {

  switch (action.type) {
    case setCounter: {

      return { counter: action.payload, isLoading: false }
    }
    case incrementLikes: {
      let counterArr = action.payload.counter

      let counter = counterArr[action.payload.userIndex].posts
      let userId = counterArr[action.payload.userIndex].userId
      let user = action.payload.users[action.payload.authIndex]
   
    
      counter[action.payload.index].likes.push(user.name)
      counter[action.payload.index].fill = '#000'


      let index = action.payload.index

      fetch(`${process.env.REACT_APP_API_URL_POSTS}/likes/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user:user.name, userIndex: action.payload.userIndex,userId:userId })
      })

      return { counter: counterArr, isLoading: false }
    }

    case decrementLikes: {
      let counterArr = action.payload.counter

      let counter = counterArr[action.payload.userIndex].posts
      let userId = counterArr[action.payload.userIndex].userId
      let user = action.payload.users[action.payload.authIndex]
   
      let likes = counter[action.payload.index].likes
const userIndex = likes.findIndex(el => el.name === user.name)

      counter[action.payload.index].likes.splice(userIndex,1)
      counter[action.payload.index].fill = '#000'


      let index = action.payload.index

      fetch(`${process.env.REACT_APP_API_URL_POSTS}/likes/remove/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user:user, userIndex: action.payload.userIndex,userId:userId })
      })

      return { counter: counterArr, isLoading: false }
    }

    default: {
      return state
    }


  }



}
export default likesReducer