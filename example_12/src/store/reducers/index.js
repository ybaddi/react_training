import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export default function cartReducer(state, action){
    console.log(state, action);
    switch(action.type){
        case ADD_TO_CART: {
            const index = state.cart.find((item) => {
                return item.product.id==action.productInfo.id
            });

            console.log(index);

            if(index != undefined){
                const newIndex = index;
                const newState = {... state};
                const indexof = newState.cart.indexOf(index);
                newState.cart.splice(indexof,1);
                index.quantity = index.quantity + parseInt(action.quantity);

                return {
                    cart: [
                        ... newState.cart,
                        {
                            product: index.product,
                            quantity: index.quantity
                        }
                    ]
                }
            }else{
                return {
                    cart: [
                        ... state.cart,
                        {
                            product: action.productInfo,
                            quantity: action.quantity
                        }
                    ]
                }
            }
        }
        case REMOVE_FROM_CART: {
            console.log(action);
            const index = action.index;
            const newState = {... state};

            delete newState.cart[index];

            return newState
        }
        default:
            return state;
    }
}
