import {combineReducers} from 'redux';
import {setCurrentBook, setCurrentAuthor, setCurrentGenre} from './mainReducer'
import {itemsHasErrored, itemsIsLoading,items} from './apiReducers';

const rootReducer = combineReducers({
    books:items,
    hasError:itemsHasErrored,
    isLoading:itemsIsLoading,
    currentBook:setCurrentBook,
    currentAuthor:setCurrentAuthor,
    currentGenre:setCurrentGenre
});

export default rootReducer;
