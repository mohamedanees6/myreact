export const Pet = props => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, props.name),
  //   React.createElement("h2", {}, props.breed)
  // ]);

  return (
    <div>
    <h1>Name is : {props.name}</h1>
    <h2>Breed is : {props.name}</h2>
    </div>
  )
};
// export default Pet;
