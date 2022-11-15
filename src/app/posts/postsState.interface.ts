import { createReducer } from "@ngrx/store";
import { PostInterface } from "./posts";
import { initialState } from "../store/reducer";

export interface PostsStateInterface{
    isLoading: boolean;
    posts: PostInterface[];
    error: string | null;
};