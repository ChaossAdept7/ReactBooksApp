import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {DropdownButton, MenuItem, Grid, Row} from 'react-bootstrap';
import {setCurrentBook, setCurrentAuthor} from './../../redux/actions'
import {gotoPage} from './../functionsStorage';

/* we can extend from Book but it not needed in that app, because one thing that we will get from it - not defining constructor */
class Authors extends Component {

    constructor(props) {
        super(props);
        this.gotoBookPage = gotoPage.bind(this, '/book_info', 'setCurrentId');
        this.gotoAuthorPage = gotoPage.bind(this, '/author_info', 'setCurrentAuthor');
    }

    render() {
        let books = this.props.books;
        let authors = books.authors;
        return <Grid>
            {
                authors.map((author,i)=>{
                    let booksStorage = books.books.filter((book)=>{
                        return book.author == author.id
                    });
                    return <Row key={i} >
                        <DropdownButton id="author" title={author.name}>
                            <MenuItem onClick={()=>{this.gotoAuthorPage(author.id)}}>
                                To Author Page
                            </MenuItem>
                            <MenuItem divider />
                                {
                                    booksStorage.map((bookItem, index)=>{
                                        return <MenuItem onClick={()=>{this.gotoBookPage(bookItem.id)}} key={index}>
                                                {bookItem.name}
                                        </MenuItem>
                                        })
                                }
                        </DropdownButton>
                    </Row>
                })
            }
        </Grid>
    }

}
/* we can use here HOC */
const mapStateToProps = (state) => {
    return {
        books: state.books,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentId: (id) => dispatch(setCurrentBook(id)),
        /* we don't use it directly but we use it from function */
        setCurrentAuthor:(id)=> dispatch(setCurrentAuthor(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Authors);

