import React from "react";

function Card(props) {
  return (
<div id={props.id} className="card d-inline-block mx-2" style={{width: "18rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
  }

export default Card;

