import { addComments, setComments, showComments } from './actions'


export const addCommentsAC = (payload) => ({ type: addComments, payload })
export const showCommentsAC = (payload) => ({ type: showComments, payload })
export const setCommentsAC = () => async (dispatch) => {


    try {
        const { status, data } = await fetch( process.env.REACT_APP_API_URL_POSTS).then(response => response.json());


        if (status === 'success') {
 
            localStorage.setItem(`products`, JSON.stringify(data))

            dispatch({ type: setComments, payload: data })

        }

    } catch (err) {

        console.log(err);
    }
}
