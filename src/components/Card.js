import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

  return (
    <div
      id={props.id}
      className="card d-inline-block mx-2 shadow-lg"
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to={`/adverts/${props.id}`} className="btn btn-primary">
          Detaylar
        </Link>
      </div>
    </div>
  );
}

export default Card;
