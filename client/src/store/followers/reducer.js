import { setFollowers, becomeFollower, unFollow } from "./actions";
const initialValue = {

  value: [],
  isLoading: true

}

const FollowerReducer = (state = initialValue, action) => {

  switch (action.type) {

    case setFollowers: {
      return ({...state, value: action.payload, isLoading: false })

    }
    case becomeFollower: {
      let usersArr = state.value

      usersArr[action.payload.userIndex].isFollower = true

      fetch(`${process.env.REACT_APP_API_URL_USERS}/follower`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: action.payload.id })
      })

      return {...state, value: usersArr, isLoading: false }
    }
    case unFollow: {
      let usersArr = state.value

      usersArr[action.payload.userIndex].isFollower = false

      fetch(`${process.env.REACT_APP_API_URL_USERS}/follower/unfollow`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: action.payload.id })
      })
      return {...state, value: usersArr, isLoading: false }
    }
    default: {
      return state
    }
  }

}
export default FollowerReducer