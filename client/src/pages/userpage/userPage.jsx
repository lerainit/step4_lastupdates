import React from 'react'
import Card from '../../componentns/card/userPostCard'
import { useSelector} from 'react-redux'
import { shallowEqual } from 'react-redux'
import UserHeader from '../../componentns/userheader/userheader'
import { useParams } from 'react-router-dom'



const UserPage = () => {
     let {nickName } =  useParams()

let users = useSelector(store =>store.users.value)

let userIndex = users.findIndex(el => el.nickName === nickName)


     const productsArr = useSelector(store => store.products.value, shallowEqual)
   

     const posts = useSelector(store => store.comments.value)
  

     return (
          <>
               <UserHeader id={ users[userIndex].id} />
               { productsArr[userIndex].posts.map(({ id, name, price, art, url, hasBackground }, index) => <Card key={index} id={id} name={name} price={price} art={art} url={url} background={hasBackground ? true : false} userIndex={userIndex} index={index} products={productsArr[userIndex].posts} userPosts={posts[userIndex].posts}></Card>)}
         
          </>
     )

}
export default UserPage   
   
