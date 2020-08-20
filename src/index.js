import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './module'
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk) (createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__() 
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);