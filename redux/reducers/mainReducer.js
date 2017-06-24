/**
 * Created by serj on 6/21/17.
 */

export function setCurrentBook(state = 0, action) {
    switch (action.type) {
        case 'SET_CURRENT_BOOK':
            return action.payload;
        default:
            return state;
    }
}

export function setCurrentAuthor(state = 0, action) {
    switch (action.type) {
        case 'SET_CURRENT_AUTHOR':
            return action.payload;
        default:
            return state;
    }
}

export function setCurrentGenre(state = 0, action) {
    switch (action.type) {
        case 'SET_CURRENT_GENRE':
            return action.payload;
        default:
            return state;
    }
}
