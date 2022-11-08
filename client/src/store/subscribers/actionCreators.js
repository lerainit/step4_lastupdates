import { addSubscriber, setSubscribers, addAuthSubscriber, removeSubscriber } from "./actions";


export const setSubscribersAC = () => async (dispatch) => {

    try {
        const { status, data } = await fetch(process.env. REACT_APP_API_URL_USERS).then(response => response.json());

        if (status === 'success') {

            dispatch({ type: setSubscribers, payload: data })
        }
    } catch (err) {

        console.log(err);
    }
}

export const addSubscriberAC = (payload) => ({ type: addSubscriber, payload })
export const addAuthSubscriberAC = (payload) => ({ type: addAuthSubscriber, payload })
export const removeSubscriberAC = (payload) => ({ type: removeSubscriber, payload })
