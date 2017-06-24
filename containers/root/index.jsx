import React, {Component, PropTypes} from 'react';
import Books from './../books/index.jsx';
import Authors from './../authors/index.jsx';
import {itemsFetchData} from './../../redux/actions.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {
    Route,
    Switch
} from 'react-router-dom';
import Grid  from 'react-bootstrap/lib/Grid';
import './style.less';
import Title from './../Title/index.jsx';
import BookInfo from '../BookInfo/index.jsx'
import AuthorInfo from '../AuthorInfo/index.jsx'

class Root extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.fetchData('/get_books');
    }

    render() {
        return <div className="style">
                <Title />
                <Switch>
                        <Route exact path='/' component={Books}/>
                        <Route path='/authors' component={Authors}/>
                        <Route path='/books' component={Books}/>
                        <Route path='/book_info' component={BookInfo}/>
                        <Route path='/author_info' component={AuthorInfo}/>
                        <Route path='/genres' role='genre' component={Books}/>
                    </Switch>
            </div>
    }

}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        hasError: state.hasError,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
