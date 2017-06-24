export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        /* indicate that we are started netw req */
        dispatch(itemsIsLoading(true));
        /* perform fetch */
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then(
                (response) => response.json()
            ).then(
                (items) => dispatch(itemsFetchDataSuccess(items))
        ).catch(
                () => dispatch(itemsHasErrored(true))
        );
    };
}

export function setCurrentBook(id) {
    return {
        type: 'SET_CURRENT_BOOK',
        payload:id
    };
}
export function setCurrentAuthor(id) {
    return {
        type: 'SET_CURRENT_AUTHOR',
        payload:id
    };
}

export function setCurrentGenre(id) {
    return {
        type: 'SET_CURRENT_GENRE',
        payload:id
    };
}