import { setSubscribers, addAuthSubscriber, removeSubscriber } from "./actions";

const initialValue = {
  value: [],
  isLoading: true,
  isSubscribed: false

}
const subscriberReducer = (state = initialValue, action) => {

  switch (action.type) {
    case setSubscribers: {

      return {...state, value: action.payload, isLoading: false, isSubscribed: false }
    }

    case addAuthSubscriber: {
      let users = state.value
      let id = action.payload.id
      let user = users[action.payload.index]

      let subscribers = user.subscribers
      let authUser = users[action.payload.authIndex]

      subscribers.push(authUser)
      users[action.payload.index].subscribers = subscribers

      fetch(`${process.env.REACT_APP_API_URL_USERS}/subscribers`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subscriber: authUser, userId: id })
      })
      return {...state, value: users, isLoading: false, isSubscribed: true }

    }
    case removeSubscriber: {
      let users = state.value
      let id = action.payload.id
      let user = users[action.payload.index]

      let subscribers = user.subscribers


      subscribers.splice(action.payload.authIndex, 1)
      users[action.payload.index].subscribers = subscribers

      fetch(`${process.env.REACT_APP_API_URL_USERS}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ index: action.payload.authIndex, userId: id })
      })
      return {...state, value: users, isLoading: false, isSubscribed: false }

    }

    default: {
      return state
    }

  }


}
export default subscriberReducer

