import React, { Component } from 'react';
import ExComponent from './components/ExComponent';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ExComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
