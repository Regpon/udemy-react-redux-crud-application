import React from 'react';
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
  return (
  <div>
    <Cat />
    <Cat />
  </div>
  )
}

const Cat = () => {
  return <div>Myao</div>
}

export default App;
