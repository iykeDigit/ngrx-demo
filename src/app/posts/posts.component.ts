import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as PostActions from '../store/actions';
import { errorSelector, isLoadingSelector, postsSelector } from "../store/selectors";
import { AppStateInterface } from "../types/appState.interface";
import { PostInterface } from "./posts";

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
})
export class PostComponent implements OnInit{
    isLoading$: Observable<boolean>;
    error$: Observable<string | null>;
    posts$: Observable<PostInterface[]>;

    constructor(private store: Store<AppStateInterface>){
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.posts$ = this.store.pipe(select(postsSelector));
    }

    ngOnInit(): void {
        this.store.dispatch(PostActions.getPosts())
    }
}