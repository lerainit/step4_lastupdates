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
   
      let likes = counter[action.payload.index].likes


      counter[action.payload.index].likes = likes + 1
      counter[action.payload.index].fill = '#000'


      let index = action.payload.index

      fetch(`http://localhost:3001/posts/likes/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post: counter[action.payload.index], userIndex: action.payload.userIndex,userId:userId })
      })

      return { counter: counterArr, isLoading: false }
    }

    case decrementLikes: {
      let counterArr = action.payload.counter
      let counter = counterArr[action.payload.userIndex].posts
      let likes = counter[action.payload.index].likes

      counter[action.payload.index].likes = likes - 1

      return { counter: counterArr, isLoading: false }
    }
    default: {
      return state
    }


  }



}
export default likesReducer