/* we need it because of jsx (React.createElement) */
import React, {Component, PropTypes} from 'react';
import {Grid, Col, Row, Checkbox} from 'react-bootstrap';

const FieldGroup=({book, author, handler, authorHandler})=>{
    return (
        <Col sm={12} className="item border_raduis_4" style={{margin:"0px 0px 10px 0px"}}>
            <Col sm={8}>
                <h2 onClick={()=>handler(book.id)} className="book_item border_raduis_4 clickable" style={{padding:"0px 5px"}} >{book.name}</h2>
            </Col>
            <Col sm={4}><span  style={{float:"right"}} >by <h3 onClick={()=>authorHandler(author.id)} className="clickable" style={{display:"inline"}}>{author.name}</h3></span></Col>
        </Col>
    );
}

const BuildBooks = ({books, handler, authorHandler})=>(
    <div className="books_page">
        {
            books.books.map((el,i)=>{
                let {name, author} = el;
                let getOrigAuthor = books.authors.find((element, index)=>{
                    if(element.id == author) return true;
                });

                return <FieldGroup authorHandler={authorHandler} handler={handler} key={i} book={el} author={getOrigAuthor} />
            })
        }
    </div>
)


export default BuildBooks;

