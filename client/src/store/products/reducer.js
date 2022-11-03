import { setProducts } from "./actions";

const initialValue = {
    value: JSON.parse(localStorage.getItem('products')),
    isLoading: true
}


const productsReducer = (state = initialValue, action) => {

    switch (action.type) {

        case setProducts: {
            return { value: JSON.parse(localStorage.getItem('products')), isLoading: false }
        }
        default: {
            return state
        }

    }

}

export default productsReducer