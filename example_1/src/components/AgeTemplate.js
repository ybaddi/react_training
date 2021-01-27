import React from "react";
function AgeComponent(props){
  let ageTemplate ="";
  if(props.age>12){
     ageTemplate = <h1>you are older then 12</h1>;
  }else{
    ageTemplate =  'you are smaller then 12';
  }
  return ageTemplate;
}


export default AgeComponent;