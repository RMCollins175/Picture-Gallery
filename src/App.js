import React, { Component } from 'react'
import NavBar from './NavBar'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default class App extends Component {
  static defaultProps = {
    pictures: [
      {
        name: "Komodo",
        src: "https://source.unsplash.com/user/rmcollins175/-I61V5JDaIE",
        facts: [
          "Taken in the Komodo National Park",
          "Taken with a DJI drone",
        ]
      },
      {
        name: "Balloons",
        src: "https://source.unsplash.com/user/rmcollins175/OtGgCeARrRc",
        facts: [
          "Taken in Sussex, Ebernoe",
          "Taken with a DJI drone",
        ]
      },
      {
        name: "Devon",
        src: "https://source.unsplash.com/user/rmcollins175/2ZrR9GB6zSk",
        facts: [
          "Taken in Devon, Salcombe",
          "Taken with a DJI Mavic Pro",
        ]
      }
    ]
  }
  render() {
    return (
      <div>
        <NavBar />
        
      </div>
    )
  }
}
