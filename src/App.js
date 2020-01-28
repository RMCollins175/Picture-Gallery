import React, { Component } from "react";
import NavBar from "./NavBar";
import PictureList from "./PictureList";
import Home from "./Home";
import { Switch, Route, Redirect} from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PictureDetails from "./PictureDetails";

export default class App extends Component {
  static defaultProps = {
    pictures: [
      {
        name: "Komodo",
        src: "https://source.unsplash.com/user/rmcollins175/-I61V5JDaIE",
        facts: ["Taken in the Komodo National Park", "Taken with a DJI drone"],
        date: "19/09/19"
      },
      {
        name: "Balloons",
        src: "https://source.unsplash.com/user/rmcollins175/OtGgCeARrRc",
        facts: ["Taken in Sussex, Ebernoe", "Taken with a DJI drone"],
        date: "26/06/19"
      },
      {
        name: "Kite Surfing",
        src: "https://source.unsplash.com/user/rmcollins175/qeCNF1q3lGs",
        facts: ["Taken in Brighton", "Taken with a DJI Mavic Pro"],
        date: "02/05/16"
      },
      {
        name: "Devon",
        src: "https://source.unsplash.com/user/rmcollins175/2ZrR9GB6zSk",
        facts: ["Taken in Devon, Salcombe", "Taken with a DJI Mavic Pro"],
        date: "04/05/18"
      },
      {
        name: "Alonisos",
        src: "https://source.unsplash.com/user/rmcollins175/FqtBZa55GBU",
        facts: ["Taken in Greece, Alonisos", "Taken with a DJI Mavic Pro"],
        date: "18/08/17"
      },
      {
        name: "Sunset",
        src: "https://source.unsplash.com/user/rmcollins175/hj5CJyoqUDg",
        facts: ["Taken in Greece, Palermos", "Taken with a DJI Mavic Pro"],
        date: "10/09/17"
      }
    ]
  };
  render() {
    
    const getPicture = (props) => {
     const name =  props.match.params.name
     let currentPicture = this.props.pictures.find(n => (
       n.name.toLowerCase() === name.toLowerCase()
     ))
     return <PictureDetails {...props} picture={currentPicture} />
    } 
      
    
    return (
      <div>
        <NavBar />

        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home />} />}
          />
          />
          <Route
            exact
            path="/pictures"
            render={() => <PictureList pictures={this.props.pictures} />}
          />
          <Route
          exact 
          path="/pictures/:name"
          render={getPicture}
          />
          <Redirect to="/pictures" />
        </Switch>
      </div>
    );
  }
}
