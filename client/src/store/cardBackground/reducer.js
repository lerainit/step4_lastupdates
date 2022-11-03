import { renderBackground,hideBackground,setBackground } from "./actions";
const initialValue = {
    value:JSON.parse(localStorage.getItem('products')),
    isLoading:true
  
}


const BackgroundReducer =  (state =initialValue, action) =>{

  
        switch (action.type) {
            case setBackground:{
                return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
            }

            case renderBackground: {
              let productsArr = state.value
                let products = productsArr[action.payload.userIndex].posts
              
                 products[action.payload.index].hasBackground = true

              localStorage.setItem('products',JSON.stringify(productsArr))
   
               
                   return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
            }
      
            case hideBackground: {
                let productsArr = state.value
                let products= productsArr[action.payload.userIndex].posts
              products[action.payload.index].hasBackground = false
                localStorage.setItem('products',JSON.stringify(productsArr))
  
                     return{ value:JSON.parse(localStorage.getItem('products')),isLoading:false}
              }
          default:{
              return state
          }
        }
      };
      export default BackgroundReducer