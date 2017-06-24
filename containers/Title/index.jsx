import React, {Component} from 'react';

class Title extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let name = location.pathname;
        switch (true){
            case (name.indexOf('books') != -1):
                name = "список книг";
                break;
            case (name.indexOf('authors') != -1):
                name = "список авторов";
                break;
            case (name.indexOf('book_info') != -1):
                name = "Иноформация по книге";
                break;
            case (name.indexOf('author_info') != -1):
                name = "Информация об авторе";
                break;
            case (name.indexOf('genre') != -1):
                name = "Жанры";
                break;
            default:
                name = "список книг";
                break;
        }
        return <div>
            <h1 style={{textTransform:"capitalize", borderBottom:"1px solid #ccc"}}>{name}</h1>
        </div>
    }
}

export default Title;

