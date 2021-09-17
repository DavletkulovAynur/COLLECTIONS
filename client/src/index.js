import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './Store/store'
import {BrowserRouter as Router} from 'react-router-dom'
import Context from "./Common/utils/context";

// import 'materialize-css'


import './index.scss';
import App from './App/App'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider value={'Так передается контекст'}>
        <Router>
          <App/>
        </Router>
      </Context.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

