import React from 'react'

import {getById} from '../api/product';

 class Product extends React.Component{
     state={
         loading: true,
         quantity: 2,
         product: {}
     }
     componentDidMount = ( ) => {
         const id = this.props.match.params.id;
         console.log(id);
         getById(id).then((data) => {
            console.log(data);
            setTimeout( () => {
            this.setState({
                product: data,
                loading: false
            });
        }, 2000);
         });
     }

     handleQuantityChange = (event) => {
         const value = event.target.value;
         if(value <0 ){
             return;
         }else{
          this.setState({
              quantity: value
          })
        }
     }
    render(){
    
        if(this.state.loading){
            return "loading ...";
        }else{
            const product = this.state.product;
            const quantity = this.state.quantity;
            return (
        <div>
            <h1>{product.title}</h1>
            <div className={'row'}>
                <div className={'col-6'}>
                    <img src={product.image} width={'100%'} className="card-img-top" alt="..."/>
                
                </div>
                <div className={'col-6'}>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">
                            {product.price} euro
                                                </p>
                                                <p>{product.description}</p>
                                                <br />

                        <input type="number"  value={quantity} onChange={this.handleQuantityChange}/> <br/>
                        <br/>
                        <p>Totla: {quantity * product.price}</p>
                        <br/>
                        <button className="btn btn-primary" >add to cart</button>
                    </div>
            
                </div>
            </div>
            
        </div>
        );
        }
    
    }
}



export default Product;