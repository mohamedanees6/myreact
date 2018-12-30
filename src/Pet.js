import React from "react";

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Name is : {this.props.name}</h1>
        <h2>Breed is : {this.props.breed}</h2>
      </div>
    );
  }
}

export default Pet;
