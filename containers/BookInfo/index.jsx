import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import {connect} from 'react-redux';
import {Grid, Col, Row} from 'react-bootstrap';
import NoItemSelected from '../noItemSelected.jsx';

import {setCurrentAuthor} from './../../redux/actions'
import {gotoPage} from './../functionsStorage';

class BookInfo extends Component {

    constructor(props) {
        super(props);
        this.goToAuthorPage = gotoPage.bind(this, '/author_info', 'setCurrentId');
    }

    render() {
        let {currentBook, books={}} = this.props;

        if(currentBook == 0) return <NoItemSelected
                text='Выберите книгу из "Список Книг"'
            />;

        let {authors:authorsStorage, genres:genreStorage, books:booksStorage} = books;
        /* detailed info about the book */
        let {name, author, genre, description} = booksStorage.find((el)=>{
            if(el.id == currentBook) return true;
        });
        /* detailed info about the author */
        let authorInfo = authorsStorage.find((el)=>{
           if(el.id == author) return true;
        });
        /* genre */
        let genreInfo = genreStorage.find((el)=>{
           if(el.id == genre) return true;
        });

        return <div className="display_inline">
            <Grid>
                <Row><h1>{name}</h1> ({genreInfo.description})</Row>
                <Row><h3 className="clickable" onClick={()=>{this.goToAuthorPage(authorInfo.id)}}>{authorInfo.name}</h3></Row>
                <Row>
                    <Col sm={8}>
                        {description}
                    </Col>
                </Row>
            </Grid>
        </div>
    }

}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        currentBook:state.currentBook
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentId: (id) => dispatch(setCurrentAuthor(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);
