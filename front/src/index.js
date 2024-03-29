import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import getreducer from './store/reducers/getreducer';
import searchreducer from './store/reducers/searchreducer';
import isloggedreducer from './store/reducers/isloggedreducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer= combineReducers({
  get:getreducer,
  search:searchreducer,
  islogged:isloggedreducer
})

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

const app=(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)



ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
