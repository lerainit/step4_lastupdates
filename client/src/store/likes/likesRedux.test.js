import likesReducer from "./reducer";
import { setCounter } from "./actions";

const initialState = {
    
    counter: [],
    isLoading:true
  

}
const counter = ['john','sam']

describe('likes reducer works',()=>{

test('should return the initial state',()=>{
expect(likesReducer(undefined,{type:undefined})).toEqual(initialState)


})
test('should change value',()=>{
expect(likesReducer(initialState,{type: setCounter,payload:counter})).toEqual({
    
        counter: counter,
        isLoading:false
      
      

    })
   
     

})
})