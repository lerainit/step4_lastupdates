
import mongoose from "mongoose"


const postsSchema = new mongoose.Schema({
    userId: Number,
    posts: [{ id: Number, url: String, hasBackground: Boolean, comments: [{ userIndex: Number, text: String, isVisible: Boolean }], likes: Number },]
})

const Posts = mongoose.model('posts', postsSchema)


export const getPostsData = async () => {


    const posts = await Posts.find({})

    return posts

}

export const addNewPostData = async (post, userId) => {
    let posts = await Posts.find({ userId: userId })

    let newPosts = posts.posts

    newPosts.push(post)

    await posts.save()
    return newPosts

}

export const addLikesData = async (userId, index) => {

    let posts = await Posts.findOne({ userId: userId })
    let newPosts = posts.posts[index].likes
    newPosts++
    posts.posts[index].likes = newPosts

    posts.save()
    return posts
}

export const addCommentsData = async (comment, userId, index) => {

    let posts = await Posts.findOne({ userId: userId })
    let newPosts = posts.posts[index]
    newPosts.comments.push(comment)
    newPosts.comments.reverse()
    newPosts.comments.map(el => el.isVisible = false)
    newPosts.comments[0].isVisible = true

    await posts.save()
    return newPosts
}
export const deletePostData = async (userId, index) => {

    let posts = await Posts.findOne({ userId: userId })
    let newPosts = posts.posts[index]
    newPosts.splice(index, 1)
    // newPosts.comments.splice(1,1)
    await posts.save()
}


