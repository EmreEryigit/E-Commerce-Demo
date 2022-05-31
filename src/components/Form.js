import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [img, setImg] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const lastnameChangeHandler = (e) => {
    setLastname(e.target.value);
  };
  const imgChangeHandler = (e) => {
    setImg(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, lastname);
    const sendData = () => {
      fetch(
        "https://advertsitev2-default-rtdb.europe-west1.firebasedatabase.app/kodsitesi.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            img: img,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(() => console.log("Yüklendi"));
    };
    sendData();
    setLastname("");
    setName("");
    setImg("");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div>
            <form onSubmit={submitHandler}>
              <label htmlFor="name">Ad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={nameChangeHandler}
                className="form-control"
              />
              <label htmlFor="lastname">Soyad</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={lastnameChangeHandler}
                className="form-control"
              />
              <label htmlFor="img">Fotoğraf URL</label>
              <input
                type="text"
                name="img"
                id="img"
                onChange={imgChangeHandler}
                value={img}
                className="form-control"
              />
              <div className="d-grid mt-2">
              <button className="btn btn-info">Submit</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
