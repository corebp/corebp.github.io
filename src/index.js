import './css/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import * as serviceWorker from './components/serviceWorker'
import Sidebar from './components/sidebar'
import { mapRoutes } from './functions';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <header className="App-header">
          <img src={require('./static/logo.png')} className="App-logo" alt="logo" />
          <h1>We're here to help!</h1>
          <img src={require('./static/logo.png')} className="App-logo" alt="logo" />
        </header>

        <Sidebar routes={routes}>
          <Switch>{mapRoutes(routes)}</Switch>
        </Sidebar>

        <footer className="App-header">

        </footer>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();