import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});


class Results extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });
    promise.then(console.log, console.error).catch();
  }
  handleMyClicks() {
    alert("You clicked Me!");
  }

  render() {
    return (
      <div>
        <Pet name="Tom" breed="Pug" />
        <Pet name="Jerry" breed="Pug" />
        <Pet name="Tim" breed="Pug" />
      </div>
    );
  }
}

export default Results;
