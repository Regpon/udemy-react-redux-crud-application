import React from 'react';
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("clicked")}} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return <div><Cat /><Cat /></div>
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
