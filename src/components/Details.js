import React from "react";
import { useParams } from "react-router-dom";

function Details(props) {
  const params = useParams();

  const foundAdvert = props.adverts.filter(
    (item) => item.id === params.advertId
  );
  console.log(params.advertId);

  console.log(foundAdvert[0]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="mt-5">
            <div className="card text-center">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">{foundAdvert[0].name}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <img
                  src={foundAdvert[0].img}
                  alt=""
                  style={{ width: "25rem" }}
                  className="card-img"
                />
              </div>
              <div className="card-footer text-muted">TEXT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Details);
