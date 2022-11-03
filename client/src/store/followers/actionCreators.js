import { setFollowers, becomeFollower, unFollow } from "./actions";

export const setFollowersAC = () => async (dispatch) => {


    try {
        const { status, data } = await fetch('http://localhost:3001/users').then(response => response.json());


        if (status === 'success') {

            console.log(data)



            dispatch({ type: setFollowers, payload: data })
        }



    } catch (err) {

        console.log(err);
    }


}
export const becomeFollowerAC = (payload) => ({ type: becomeFollower, payload })
export const unFollowAC = (payload) => ({ type: unFollow, payload })