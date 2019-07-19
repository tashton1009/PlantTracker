import React, { Component } from 'react';

//Stateless component or pure component {product} syntax is the object destructing
const Plant = ({plant}) => {
  const divStyle = {


  }

  //if the props plant is null, return Plant doesn't exsist
  if(!plant) {
    return(<div style={divStyle}> Plant Does Not Exsist </div>);
  }
  //else, deisply plant data
  return(
    <div style={divStyle}>
      <h2> {plant.name}</h2>
      <p> {plant.sunlight} </p>
    </div>
  )
}

export default Plant;
