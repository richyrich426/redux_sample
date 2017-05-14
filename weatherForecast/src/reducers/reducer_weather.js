import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    console.log('action received', action);

    switch(action.type) {
        case FETCH_WEATHER:
            //return [ action.payload.data ];


            // **this is the same as
            //return state.concat([action.payload.data]);
            // **this es6
            return [action.payload.data, ...state];
    }

    return state;
}
