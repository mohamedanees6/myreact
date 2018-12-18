const Pet = (props) => {
  return React.createElement("div",{},[
    React.createElement("h1",{},props.name),
    React.createElement("h2",{},props.breed)
  ])
}


const App = () => {
  return React.createElement("div",{},[
      React.createElement('h1',{},'Adopt me!'),
      React.createElement(Pet,{
        name:"Tom",
        breed:"Havanese"
      }),
      React.createElement(Pet,{
        name:"Tom",
        breed:"Havanese"
      }),
      React.createElement(Pet,{
        name:"Tom",
        breed:"Havanese"
      })
    ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
