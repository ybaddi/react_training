import React from 'react'

export default function CartItem(props){
    const {item} = props;
    const {product} = item;
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
                                            
                    <a href={"/products/" + product.id} className="btn btn-danger">
                        <i className="fa fa-trash" />
                         delete
                        </a>
                </div>
            </div>

    )
}