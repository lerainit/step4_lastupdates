import React from 'react'
import { Routes, Route, useParams,Outlet } from 'react-router-dom'
import UserPage from './pages/userpage/userPage';
import NotFoundPage from './pages/notfoundpage/notfoundpage';
import PostsPage from './componentns/posts/postsPage';



const AppRoutes = () => {

   

    let {nickName } =  useParams()

    return (

        <Routes>
          
            <Route path='/' element={<Outlet />} >
             <Route index element = {<PostsPage/>}/>
           <Route  path={"/:nickName"} element={<UserPage  />} />
          </Route>

            <Route path='*' element={<NotFoundPage />} />
        </Routes>

    )
}
export default AppRoutes; 
