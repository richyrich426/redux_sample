// state arguement is not application state, only the state
// this reducer is responsible for

// es6 syntax when state comes in undefined (user starts the app) then return
// null
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
            break;
    }

    return state;
}
