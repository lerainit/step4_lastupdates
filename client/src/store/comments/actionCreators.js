import { addComments, setComments, showComments } from './actions'


export const addCommentsAC = (payload) => ({ type: addComments, payload })
export const showCommentsAC = (payload) => ({ type: showComments, payload })
export const setCommentsAC = () => async (dispatch) => {


    try {
        const { status, data } = await fetch('http://localhost:3001/posts').then(response => response.json());


        if (status === 'success') {
            console.log(data)
            localStorage.setItem(`products`, JSON.stringify(data))


            dispatch({ type: setComments, payload: data })

        }

    } catch (err) {

        console.log(err);
    }
}
