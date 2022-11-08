import { setPosts } from "./actions";

 export const setPostsAC =()=> async (dispatch)=>{
   
        try {
            const {status,data} = await fetch( process.env.REACT_APP_API_URL_POSTS).then(response =>response.json());
         

            if(status === 'success'){
                
               let postsArr = []
 data.forEach(({ posts,userId }) => posts.map((el,index) =>{
el.userId = userId 
el.postsIndex = index
  postsArr.push(el)    }))
        
                dispatch({ type:setPosts,payload: postsArr})
            
            }
    
        } catch (err) {
         
            console.log(err);
        }}
     