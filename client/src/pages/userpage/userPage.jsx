import React from 'react'
import Card from '../../componentns/card/userPostCard'
import { useSelector} from 'react-redux'
import { shallowEqual } from 'react-redux'
import UserHeader from '../../componentns/userheader/userheader'



const UserPage = (props) => {

     const productsArr = useSelector(store => store.products.value, shallowEqual)
     const userIndex = props.index
     const products = productsArr[userIndex].posts
     const posts = useSelector(store => store.comments.value)
     const userPosts = posts[userIndex].posts

     return (
          <>
               <UserHeader id={props.id} />
               {products.map(({ id, name, price, art, url, hasBackground }, index) => <Card key={index} id={id} name={name} price={price} art={art} url={url} background={hasBackground ? true : false} userIndex={userIndex} index={index} products={products} userPosts={userPosts}></Card>)}
         
          </>
     )

}
export default UserPage   
   
