import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PictureList.css";

export default class PictureList extends Component {
  render() {
    const pictures = this.props.pictures.map(picture => (
      <div className="Picture col-sm-6 col-lg-4 text-center">
        <Link  to={`/pictures/${picture.name}`}>
          <img src={`${picture.src}`} alt={picture.name}></img>
          <h3 className="underline">{picture.name}</h3>
        </Link>
      </div>
    ));

    return (
      <div className="PictureList">
        <h1 className="Display-1 text-center m-5">Picture Gallery</h1>

        <div className="row">{pictures}</div>
      </div>
    );
  }
}
