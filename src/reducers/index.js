import {  combineReducers } from 'redux';
import {FETCH_POSTS, NEW_POST} from '../action/';

const initialState = {
    items: [],
    item: {}
}


export const reducer = function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {...state, item: action.payload};
        default:
            return state;
    }
}
export default combineReducers({
    posts: reducer
})