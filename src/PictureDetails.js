import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PictureDetails extends Component {
  render() {
    const picture = this.props.picture;

    const pictureFacts = picture.facts.map((fact, i) => (
      <ul className="list-group list-group-flush">
        <li className="list-group-item" key={i}>
          {fact}
        </li>
      </ul>
    ));

    return (
      <div className="DogDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-7">
          <div className="DogDetails-card card">
            <img
              className="card-img-top"
              src={picture.src}
              alt={picture.name}
            ></img>
            <div className="card-body">
              <h1 className="card-title">{picture.name}</h1>
              <h5 className="card-subtitle text-muted">
                Date taken: {picture.date}
              </h5>
            </div>
              {pictureFacts}
            <Link to="/pictures" className="btn btn-info">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
