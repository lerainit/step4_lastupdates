import { renderBackground,hideBackground,setBackground} from "./actions";
export const setBackgroundAC =()=> async (dispatch)=> {

  if  (!localStorage.getItem('products')){
        try {
            const {status,data} = await fetch('http://localhost:3001/posts').then(response =>response.json());
       
    
  if(status === 'success'){
        
            localStorage.setItem(` products`,JSON.stringify( data))
               
             
                dispatch({ type:setBackground,})
            
  }
    
        } catch (err) {
         
            console.log(err);
        }}
        else{
            dispatch({type:setBackground})
       }

}

 export const renderBackgroundAC = (payload) => ({type:renderBackground,payload})

 export const hideBackgroundAC =(payload) =>({type:hideBackground,payload})