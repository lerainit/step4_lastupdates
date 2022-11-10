import { incrementLikes, decrementLikes, setCounter } from "./actions";

export const incrementLikesAC = (payload) => ({ type: incrementLikes, payload })

export const decrementLikesAC = (payload) => ({ type: decrementLikes,payload })
export const setCounterAC = () => async (dispatch) => {


    try {
        const { status, data } = await fetch(process.env.REACT_APP_API_URL_POSTS).then(response => response.json());


        if (status === 'success') {


            dispatch({ type: setCounter, payload: data })

        }

    } catch (err) {

        console.log(err);
    }


} 