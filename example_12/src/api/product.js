import Product from '../pages/Products';
import products from './product.json';


export async function getById(id){
    const product = products.find(items => items.id==id)
    return Promise.resolve(product);
}

export async function getAll(){
    return Promise.resolve(products);
}


export default {
    getById, getAll
}