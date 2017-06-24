/**
 * Created by serj on 5/23/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from './../redux/actions';
import './../css/main.less';
import {Button} from 'react-bootstrap';
import Home from './../containers/root/index.jsx';
import Header from './../containers/header/index.jsx';

class App extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div className="app">
            <Header />
            <Home />
        </div>
    }
}

export default App;