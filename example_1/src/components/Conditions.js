import React from 'react'

function List (props){
 
     const age = 17;
     let ageTemplate ="";
     if(age>12){
        ageTemplate = <h1>you are older then 12</h1>;
     }else{
       ageTemplate =  'you are smaller then 12';
     }


    return <div>
        {ageTemplate}
        <br/>
        {age>20 ?  
            <div>you are older then 20</div> 
            : <div>you are smaller then 20</div>
        }
    </div>
}


export default List;