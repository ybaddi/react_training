import products from './product.json';


function getAll(){
    return Promise.resolve(products);
}

export default getAll;