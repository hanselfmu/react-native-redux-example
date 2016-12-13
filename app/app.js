import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import fsaThunk from './middleware/reduxFSAThunk';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Form from './containers/Form';

const middleware = [ fsaThunk, thunk ];
const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Form />
            </Provider>
        );
    }
}
