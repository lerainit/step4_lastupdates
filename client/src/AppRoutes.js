import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserPage from './pages/userpage/userPage';
import NotFoundPage from './pages/notfoundpage/notfoundpage';
import PostsPage from './componentns/posts/postsPage';
import { useSelector } from 'react-redux';


const AppRoutes = () => {

    const users = useSelector(store => store.users.value)
    return (

        <Routes>
            <Route path='/' element={<PostsPage />} />
            {users.map(({ id, name }, index) => <Route key={index} path={`/${name.replace(/\s+/g, '')}`} element={<UserPage index={index} id={id} />} />)}
            <Route path='/posts' element={<UserPage />} />

            <Route path='*' element={<NotFoundPage />} />
        </Routes>

    )
}
export default AppRoutes;