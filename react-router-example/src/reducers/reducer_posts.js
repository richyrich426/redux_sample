import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {

        case FETCH_POST:
            //this is identical

            // const post = action.payload.data;
            // const newState { ...state };
            // newState[post.id] = post;
            // return newState;

            //to this
            console.log("payload", action.payload);
            return {...state, [action.payload.data.id]: action.payload.data };

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            //expect
            // [post1, post2]

            //we transform to
            // { 4: post }

        case DELETE_POST:
            //drop the object which contains the id
            return _.omit(state, action.payload);

        default:
            return state;
    }
}
