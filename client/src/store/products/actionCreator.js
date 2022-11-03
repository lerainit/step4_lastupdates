import { setProducts } from './actions'


export const setProductsAC = () => async (dispatch) => {

    if (!localStorage.getItem('products')) {
        try {
            const { status, data } = await fetch('http://localhost:3001/posts')
                .then(response => response.json());

            if (status === 'success') {
                console.log(data)
                localStorage.setItem(`products`, JSON.stringify(data))

                dispatch({ type: setProducts, })

            }

        } catch (err) {

            console.log(err);
        }
    }
    else {
        dispatch({ type: setProducts, payload: [] })
    }

} 
