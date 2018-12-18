import React from 'react'
import ReactDOM from 'react-dom'
import {Pet} from './Pet'


class App extends React.Component {
  handleMyClicks() {
    alert("You clicked Me!");
  }

  render() {
    return React.createElement("div", { onClick: this.handleMyClicks }, [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, { name: "Tom", breed: "Havanese" }),
      React.createElement(Pet, {
        name: "Jerry",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Harry",
        breed: "Havanese"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
