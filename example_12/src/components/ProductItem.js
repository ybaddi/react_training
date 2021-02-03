import React from 'react'
import { Link} from 'react-router-dom';

export default function ProductItem(props){
    const product = props.product;
    return (
    
        
            <div className="card" >
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        {product.price} euro
                                            </p>
                                            
                    <Link to={"/products/" + product.id} 
                    className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>

    )
}