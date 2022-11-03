import { setUsers } from "./actions";
const initialValue = {
    value: [],
    isLoading: true
}

const UsersReducer = (state = initialValue, action) => {
    switch (action.type) {


        case setUsers: {
            return { value: action.payload, isLoading: false }
        }
        default: {
            return state
        }


    }

}
export default UsersReducer;