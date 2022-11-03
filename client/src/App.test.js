import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from "react-redux";
import store from './store'

const Component =() =>{
    return (
    <Provider store ={store}>
        <App/>
    </Provider>
)}
describe('App renders',()=>{

test('should App match snapshot',()=>{
const {asFragment } = render(<Component/>)
expect(asFragment()).toMatchSnapshot()

})

})