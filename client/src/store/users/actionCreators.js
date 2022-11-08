import { setUsers } from "./actions";



export const setUsersAC = () => async (dispatch) => {

    try {
        const { status, data } = await fetch(process.env. REACT_APP_API_URL_USERS).then(response => response.json());


        if (status === 'success') {


            dispatch({ type: setUsers, payload: data })

        }

    } catch (err) {

        console.log(err);
    }
}
