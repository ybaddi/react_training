import React from 'react'

function List (props){
 
     const fruits = ["Apple", "orange", "banana"];


    return <div>
        {fruits.map(item=><li key={item}>{item}</li>)}
        </div>
}


export default List;