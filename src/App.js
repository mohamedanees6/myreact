const Pet = () =>{
  return React.createElement("div",{},[
    React.createElement("h1",{},"Tom"),
    React.createElement("h2",{},"Dog")

  ])
}


const App = () => {
  return React.createElement("div",{},[
      React.createElement('h1',{},'Adopt me!'),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
