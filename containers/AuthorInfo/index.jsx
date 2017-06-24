import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row} from 'react-bootstrap';
import {gotoPage} from './../functionsStorage';
import {setCurrentAuthor} from './../../redux/actions'
import NoItemSelected from '../noItemSelected.jsx';

const BookItem = ({book, handler})=>{
    return <li className="clickable" onClick={()=>{handler(book.id)}}>
        {book.name}
    </li>
};

class AuthorInfo extends Component {

    constructor(props) {
        super(props);
        this.gotoBookPage = gotoPage.bind(this, '/book_info', 'setCurrentId');
    }

    render() {
        let {books, currentAuthor} = this.props;
        if(currentAuthor == 0)
            return <NoItemSelected
                text='Пожалуйста выберите автора из "Список Авторов"'
            />;
        /* filter books by author*/
        let allBooks = books.books.filter((el)=>{
            return el.author == currentAuthor;
        });

        let autorsStorage =books.authors;

        let authorInfo = autorsStorage.find((el)=>{
            if(el.id == currentAuthor) return true;
        });

        return <div className="display_inline">
            <Grid>
                <Row>
                    <h1>
                        {authorInfo.name}
                    </h1>
                </Row>
                <Row>
                    {authorInfo.biography}
                </Row>
                <Row>
                    Написал такие книги как:
                    <ul>
                        {
                            allBooks.map((el, i)=>{
                                return <BookItem
                                    book={el}
                                    handler={this.gotoBookPage}
                                    key={i}
                                />
                            })
                        }
                    </ul>
                </Row>
            </Grid>
        </div>
    }

}
const mapStateToProps = (state) => {
    return {
        books: state.books,
        currentAuthor:state.currentAuthor,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentId: (id) => dispatch(setCurrentAuthor(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AuthorInfo);

