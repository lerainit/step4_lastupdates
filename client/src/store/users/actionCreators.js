import { setUsers } from "./actions";



export const setUsersAC = () => async (dispatch) => {

    try {
        const { status, data } = await fetch('http://localhost:3001/users').then(response => response.json());


        if (status === 'success') {



            dispatch({ type: setUsers, payload: data })

        }

    } catch (err) {

        console.log(err);
    }
}
