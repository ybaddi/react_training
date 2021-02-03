import React from 'react'
import CartItem from '../components/CartItem';

import {getAll} from '../api/product'
import {connect} from 'react-redux'

import {removeFromCart} from '../store/actions/actions'

class Cart extends React.Component{

    
render(){
    return (
    <div>
        <h1>Product</h1>
        <div className={'row'}>
            {this.props.cartitems.map( (item,index) => 
                <div className={'col-3'} key={index}>
                    <CartItem index={index} item={item}></CartItem>

                </div>
                )}
         </div>
                <h3>
                    Total: {this.props.total} euro
                </h3>

                <button className="btn btn-primary btn-block"> Pay </button>
            
        

    </div>)
}


}


const mapStateToProps = (state) => {
    return {
        cartitems: state.cart,
        total : state.cart.reduce( (total, item) => 
        total+ item.product.price * item.quantity, 0)
    };
}

export default connect(mapStateToProps)(Cart)
