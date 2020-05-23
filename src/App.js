import React from 'react';
import {Provider } from 'react-redux';
import {createStore , applyMiddleware , compose} from "redux"
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducer';
import {BrowserRouter,basename} from 'react-router-dom';
import {Routes} from './route/route'
import './App.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

function App() {
  return (
          <Provider store={store}>
                <BrowserRouter basename="/task-manager">
                    <Routes />
                </BrowserRouter>
            {/* <div>it will be replaced by Layout component</div> */}
          </Provider>
  );
}

export default App;
