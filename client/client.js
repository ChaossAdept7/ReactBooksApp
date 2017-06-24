/**
 * Created by serj on 5/23/17.
 */
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App'
import configureStore from './../redux/store';
import {Provider} from 'react-redux';
import { BrowserRouter , HashRouter} from 'react-router-dom'


//configure and create store

let initialState={
    books:{
        books:[],
        authors:[],
        genres:[]
    },
    hasError:false,
    isLoading:false,
    currentBook:0,
    currentAuthor:0,
    currentGenre:0
};

let store = configureStore(initialState);

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)