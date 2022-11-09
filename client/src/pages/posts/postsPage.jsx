import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './postsPage.module.scss'
import Navigation from '../../componentns/navigation/Navigation'
import { incrementLikesAC } from "../../store/likes/actionCreators";
import { setCounterAC } from "../../store/likes/actionCreators";
import CommentsForm from "../../componentns/commentsForm/commentsForm";
import { showCommentsAC } from "../../store/comments/actionCreators";
import { setCommentsAC } from "../../store/comments/actionCreators";
import { setCards } from "../../store/cards/actions";
import { postsSlice} from "../../store/posts/actions";
import { NavLink } from "react-router-dom";
import { setPostsAC } from "../../store/posts/actionCreators";
import { setUserIndexAC } from "../../store/userIndex/actionCreators";


const PostsPage = () => {

  const dispatch = useDispatch()
  const users = useSelector(store => store.users.value)
  const counterArr = useSelector(store => store.counter.counter)
  const comments = useSelector(store => store.comments.value)
  const postssArr = useSelector(store => store.products.value)
  const posts = useSelector(store => store.posts.value)
function findIndex (userId ){ 
  return users.findIndex(el => el.id === userId)}
 
  let count = 0

  useEffect( () => {
 
  dispatch({ type: postsSlice, payload: { posts: posts, count: count } })
  }, [])
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop + window.innerHeight === e.target.documentElement.scrollHeight) {
      if (count === posts.length - 3) {
count =0 
  count++
      }
   count++
    dispatch(setPostsAC())
    dispatch({ type: postsSlice, payload: { posts: posts, count: count } })
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {

      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      <div className={styles.post_page_container} >
        <div className={styles.post_img_container}>

          {posts.map(({ userId, postsIndex, url }, index) => users[findIndex(userId)].isAuth ? null : <div key={index} className={styles.posts_container} ><NavLink  className={styles.user_link} to={`/${users[findIndex(userId)].nickName}`} onClick = {()=>{dispatch(setUserIndexAC(findIndex(userId)))}} ><div className={styles.user_container}>< img className={styles.user_img} src={users[findIndex(userId)].url} alt="user" /><h3 className={styles.user_name}>{users[findIndex(userId)].name}</h3></div></NavLink><img className={styles.posts_img} src={url} alt="post" onDoubleClick={async () => {
            await dispatch(setCounterAC())
            dispatch(incrementLikesAC({ index: postsIndex, userIndex:findIndex(userId), counter: counterArr }))

          }} />
            {postssArr[findIndex(userId)].posts[postsIndex].comments.map((el, index) => el.isVisible ? <div  key={index} className={styles.comments_container}><h3 className={styles.comment_user_name}>{users[el.userIndex].name}</h3><h3 className={styles.comment_user_text}>{el.text}</h3></div> : null)}
            {postssArr[findIndex(userId)].posts[postsIndex].comments.length > 1 && !postssArr[findIndex(userId)].posts[postsIndex].comments[1].isVisible ? <button className={styles.showmore_btn} onClick={() => {
              dispatch(setCommentsAC())
              dispatch(showCommentsAC({ userIndex:findIndex(userId), index: postsIndex, comments: comments }))

              dispatch({ type: setCards })
            }}>Show more</button> : null}
            <span className={styles.posts_span}>Likes:{counterArr[findIndex(userId)].posts[postsIndex].likes}</span> 

<svg onClick={async () => {
              await dispatch(setCounterAC())
              dispatch(incrementLikesAC({ index: postsIndex, userIndex: findIndex(userId), counter: counterArr }))

            }} className={styles.svg} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 32 32">
<g>
	<g id="heart_x5F_fill" 
	  fill={counterArr[findIndex(userId)].posts[postsIndex].fill}
	>
		<g>
			<g>
				<path  d="M16,5.844C14.387,3.578,11.871,2,8.887,2C3.984,2,0,5.992,0,10.891v0.734L16.008,30L32,11.625
					v-0.734C32,5.992,28.016,2,23.113,2C20.129,2,17.613,3.578,16,5.844z"/>
			</g>	</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g>
</g>
</svg>

            <CommentsForm index={postsIndex} userIndex={findIndex(userId)} userId={userId} /></div>)

          }</div>

        <Navigation />
      </div>
    </>
  )
}
export default PostsPage

           