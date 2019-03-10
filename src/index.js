import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import createHistory  from 'history/createBrowserHistory'
import App from './App';
import * as serviceWorker from './serviceWorker';
import  configureStore from './redux/store/configurestore'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
          main: '#f48fb1',
        },
        useNextVariants: true
      },
});

const history = createHistory(); 
const store = configureStore(); 

const app =(
        <Provider store={store}>
            <Router history={history}>
            <MuiThemeProvider theme={theme}>
                 <App/>
             </MuiThemeProvider>
            </Router>
        </Provider>
    )

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
