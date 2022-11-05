import { setCards } from './actions'


export const setCardsAC = () => async (dispatch) => {

    if (!localStorage.getItem('products')) {
        try {
            const { status, data } = await fetch('http://localhost:3001/posts')
                .then(response => response.json());

            if (status === 'success') {
                console.log(data)
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
