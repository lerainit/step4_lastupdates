import { renderBackground,hideBackground,setBackground} from "./actions";
export const setBackgroundAC =()=> async (dispatch)=> {

  if  (!localStorage.getItem('products')){
        try {
            const {status,data} = await fetch(process.env.REACT_APP_API_URL_POSTS).then(response =>response.json());
       
    
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