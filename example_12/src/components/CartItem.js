import React from 'react'

import {connect} from 'react-redux'
import {removeFromCart} from '../store/actions/actions'

 class CartItem extends React.Component{

    constructor(props){
        super(props);
    }

    removeFromCart = (index) => {
        this.props.removeFromCart(index);
    }

     render(){
    const {item} = this.props;
    const {product} = item;
    const {index} = this.props;
    return (
    
        
            <div className="card" >
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        Price: {product.price} euro
                                            
                                            <br />
                                            Quentity: {item.quantity}
                                            <br />
Total Price : {product.price * item.quantity} 
                                            <br/>
                                            </p>
                                            
                    <button  className="btn btn-danger"
                    onClick={() => this.removeFromCart(index)}>
                        <i className="fa fa-trash" />
                         delete
                        </button>
                </div>
            </div>

    )
     }
}



const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index))
    };
}
export default connect(null, mapDispatchToProps)(CartItem)