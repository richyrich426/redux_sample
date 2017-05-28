import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
            //expect
            // [post1, post2]

            //we transform to
            // { 4: post }
        default:
            return state;
    }
}
