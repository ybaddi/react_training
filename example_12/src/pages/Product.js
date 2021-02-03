import React from 'react'
import ProductItem from '../components/ProductItem';

import getAll from '../api/product'

class Product extends React.Component{

    state = {
        products: []
    }
    componentDidMount= () =>{
        getAll().then(response => {
            console.log(response);
            this.setState({
                products: response
            })
        })
    }
render(){
    return (
    <div>
        <h1>Product</h1>
        <div className={'row'}>
            {this.state.products.map( (product, index) => { return (
                <div className={'col-4'} key={product.id}>
                    <ProductItem product={product}></ProductItem>
                </div>
            )})}
        
        
        
        </div>

    </div>)
}


}

export default Product;