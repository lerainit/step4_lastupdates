import { setFollowers, becomeFollower, unFollow } from "./actions";

export const setFollowersAC = () => async (dispatch) => {


    try {
        const { status, data } = await fetch(process.env. REACT_APP_API_URL_USERS).then(response => response.json());


        if (status === 'success') {


            dispatch({ type: setFollowers, payload: data })
        }



    } catch (err) {

        console.log(err);
    }


}
export const becomeFollowerAC = (payload) => ({ type: becomeFollower, payload })
export const unFollowAC = (payload) => ({ type: unFollow, payload })