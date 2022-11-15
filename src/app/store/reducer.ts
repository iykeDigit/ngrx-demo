import { Actions } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { PostsStateInterface } from "../posts/postsState.interface";
import * as PostsActions from './actions'

export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null,
};

export const reducer = createReducer(
    initialState, //==> initial state
    on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })), //when the action is happening, how do we wanna change our state(s). Here we just wanna updateis loading to true
    on(PostsActions.getPostsSuccess, (state, action) => ({ 
        ...state, 
        isLoading: false,
        posts: action.posts, 
    })), 
    on(PostsActions.getPostsFailure, (state, action) => ({ 
        ...state, 
        isLoading: false, 
        error: action.error,
     })),                                                                    
                                                                            

);