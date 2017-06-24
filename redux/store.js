/**
 * Created by serj on 5/23/17.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger'
//Redux Thunk middleware allows you to write action creators that return a function instead of an action
import thunk from 'redux-thunk';
//some middleware

let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore);

export default function configureStore(initialState){
    return finalCreateStore(rootReducer, initialState);
}