import { addSubscriber, setSubscribers, addAuthSubscriber, removeSubscriber } from "./actions";

const initialValue = {
  value: [],
  isLoading: true,
  isSubscribed: false

}
const subscriberReducer = (state = initialValue, action) => {

  switch (action.type) {
    case setSubscribers: {

      return { value: action.payload, isLoading: false, isSubscribed: false }
    }


    case addAuthSubscriber: {
      let users = state.value
      let id = action.payload.id
      let user = users[action.payload.index]

      let subscribers = user.subscribers
      let authUser = users[action.payload.authIndex]

      subscribers.push(authUser)
      users[action.payload.index].subscribers = subscribers

      fetch('http://localhost:3001/users/subscribers', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subscriber: authUser, userId: id })
      })
      return { value: users, isLoading: false, isSubscribed: true }

    }
    case removeSubscriber: {
      let users = state.value
      let id = action.payload.id
      let user = users[action.payload.index]

      let subscribers = user.subscribers


      subscribers.splice(action.payload.authIndex, 1)
      users[action.payload.index].subscribers = subscribers

      fetch('http://localhost:3001/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: action.payload.authIndex, userId: id })
      })
      return { value: users, isLoading: false, isSubscribed: false }

    }
    default: {
      return state
    }

  }


}
export default subscriberReducer

/*case addSubscriber: {
                let users = action.payload.users
                let index;
let id = action.payload.id
console.log(id)
             if(action.payload.index === 0){
index = 1
             }else{
                 index = 0
             }
             let subscribers = users[action.payload.index].subscribers
 

             subscribers.push(users[index])
             users[action.payload.index].subscribers = subscribers
 
        
         

             fetch('http://localhost:3001/users/subscribers', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({subscriber:users[index] , userId:id})
})

   return {value:users,isLoading:false}}*/