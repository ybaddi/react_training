import axios from 'axios'

export async function getUsers(){

    // dans HTTP on a deux methode pour envoyer des requette HTTP
    // soit Get ou Post (et d'autres, .i.e PUT, OPTIONS, HEAD, DELETE ....)
    //  for Get we send all params in the URL for example:
    // www.baddiyoussef.com?age=20&name=baddi
    // for POST we send all param in the HTTP Header
    try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users') ;
    console.log(response);
    return response;
    }catch(error){
      console.log(error);
    }
}