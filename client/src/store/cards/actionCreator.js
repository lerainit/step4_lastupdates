import { setCards } from './actions'


export const setCardsAC = () => async (dispatch) => {

    if (!localStorage.getItem('products')) {
        try {
            const { status, data } = await fetch( process.env.REACT_APP_API_URL_POSTS)
                .then(response => response.json());

            if (status === 'success') {
             
                localStorage.setItem(`products`, JSON.stringify(data))

                dispatch({ type: setCards, })

            }

        } catch (err) {

            console.log(err);
        }
    }
    else {
        dispatch({ type: setCards, payload: [] })
    }

} 
