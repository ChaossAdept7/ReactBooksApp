import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid, Col, Row, Checkbox} from 'react-bootstrap';
import {setCurrentBook, setCurrentAuthor} from './../../redux/actions'
import {gotoPage} from './../functionsStorage';
import BuildBooks from './BuildBooks.jsx';

const Genre = ({genres, handler, presentGenres})=>{
    return (<Row>
        {
            genres.map((el, i)=>{
                return <Checkbox checked={presentGenres.includes(el.id)} value={el.id} eventKey={i} inline onChange={handler} key={i}>
                    {el.description}
                </Checkbox>
            })
        }
    </Row>);
}

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {genres:[]};
        this.stateHandler = this.stateHandler.bind(this);
        this.gotoBookPage = gotoPage.bind(this, '/book_info', 'setCurrentId');
        this.gotoAuthorPage = gotoPage.bind(this, '/author_info', 'setCurrentAuthor');
    }

    stateHandler(e){
        let value = e.target.value;

        this.setState((prevState)=>{
            /* copy array */
            let genres = prevState.genres.slice(0);

            /* if we have such id we want to delete it*/
            if(genres.includes(value)){
                let retExcluded = prevState.genres.filter((el)=>{
                    return el != value;
                });
                return {genres:retExcluded};
            }
            /* if we don't have such id - we want to add it*/
            genres.push(value);
            return {genres:genres}
        });
    }

    render() {
        /* we will determine role by location */
        let getLocation = location.pathname;

        let {books, authors, genres} = this.props.books;
        /* copy of books array */
        let booksStorage = this.props.books.books.slice(0);

        /* genres widget */
        let filterGenres = this.state.genres;

        let buildGenres = <Genre
            genres={genres}
            handler={this.stateHandler}
            presentGenres={filterGenres}
        />;

        /* filtering by genre */
        if(getLocation == '/genres'){
                booksStorage = booksStorage.filter((el)=>{
                    return filterGenres.indexOf(el.genre) != -1
                });
        }else{
            buildGenres = null;
        }


        return <Grid bsClass="limit_width">
            {buildGenres}
            <BuildBooks
                books={
                    {
                        authors,
                        genres,
                        books:booksStorage
                    }
                }
                handler={this.gotoBookPage}
                authorHandler={this.gotoAuthorPage}
            />
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


export default connect(mapStateToProps,mapDispatchToProps)(Books);

