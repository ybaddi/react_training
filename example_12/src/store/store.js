import {createStore} from 'redux';


const initalState= {
    cart: [
        { product: {
            "id":2,
            "title": "produit 2",
            "price": 200,
            "image" : "/imgs/img1.jpg",
            "description":"description1"
    
            },
            quantity: 5
        },
        { product: {
            "id":1,
            "title": "produit 2",
            "price": 100,
            "image" : "/imgs/img1.jpg",
            "description":"description1"
    
            },
            quantity: 4
        }
    ]
};

function reducers(state){
    return state;
}


const store = createStore(reducers, initalState);


export default store;