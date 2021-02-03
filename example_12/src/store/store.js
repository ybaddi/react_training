import {createStore} from 'redux';

import cartReducer from './reducers/index'


const initalState= {
    cart: [
        
    ]
};

function reducers(state){
    return state;
}


const store = createStore(cartReducer, initalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;