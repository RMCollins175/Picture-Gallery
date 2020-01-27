import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './Picture.css'

export default class PictureList extends Component {
  render() {
    const pictures = this.props.pictures.map(picture => (
      <div className="Picture col-sm-6 col-lg-4 text-center">
        <img src={`${picture.src}`} alt={picture.name}></img>
          <Link className="underline" to={`/pictures/${picture.name}`}><h3>{picture.name}</h3></Link>
      </div>
    ));

    return (
      <div className="PictureList">
        <h1 className="Display-1 text-center mt-5">Picture Gallery</h1>

        <div className="row">{pictures}</div>
      </div>
    );
  }
}
