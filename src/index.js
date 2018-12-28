import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import NavBar from './components/NavBar';
import App from './components/App';
import ImageCard from './components/ImageCard';
import * as serviceWorker from './serviceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={ store }>
      <NavBar />
      <ImageCard />
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
