import { getPostsData, addNewPostData, addLikesData, deletePostData, addCommentsData } from "./postsDataLayers.js";



export const getPosts = async (req, res) => {
    const data = await getPostsData()
    res.json({ status: 'success', data })
}
export const addNewPost = async (req, res) => {
    const data = await addNewPostData(req.body.post)
    res.json({ status: 'success', data })

}
export const addLikes = async (req, res) => {

    const data = await addLikesData(req.body.userId, req.params.index)
    res.json({ status: 'success', data })
}
export const addComments = async (req, res) => {

    const data = await addCommentsData(req.body.comment, req.body.userId, req.params.index)

    res.json({ status: 'success', data })

}

export const deletePost = async (req, res) => {

    await deletePostData(req.body.userId, req.params.index)

    res.json({ status: 'success' })
}