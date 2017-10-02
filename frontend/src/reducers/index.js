import { combineReducers } from 'redux'

import {
    GET_POSTS,
    POST_URL,
} from '../actions/PostsActions'


/* postsReducer*/
export const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        default:
            return state;
    }
}


export default combineReducers({
	postsReducer,
})
