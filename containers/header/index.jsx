import React, {Component, PropTypes} from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav navbar>
                    <NavItem><Link to="/authors">Список авторов</Link></NavItem>
                    <NavItem><Link to="/books">Список книг</Link></NavItem>
                    <NavItem><Link to="/genres">Жанр</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }

}

export default Header;

