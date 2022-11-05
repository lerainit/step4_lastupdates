import { combineReducers } from "redux";
import cardIndexReducer from "./cardId/reducer";
import modalReducer from './modal/reducer'
import cardsReducer from "./cards/reducer";
import likesReducer from "./likes/reducer";
import BackgroundReducer from "./cardBackground/reducer";
import postsReducer from "./posts/reducer";
import UsersReducer from "./users/reducer";
import subscriberReducer from "./subscribers/reducer";
import userIndexReducer from "./userIndex/reducer";
import commentsReducer from "./comments/reducer";
import FollowerReducer from "./followers/reducer";


const appReducer = combineReducers({
   modal: modalReducer,
   cardIndex: cardIndexReducer,
   products: cardsReducer,
   counter: likesReducer,
   background: BackgroundReducer,
   posts: postsReducer,
   users: UsersReducer,
   subscribers: subscriberReducer,
   userIndex: userIndexReducer,
   comments: commentsReducer,
   followers:FollowerReducer

})
export default appReducer