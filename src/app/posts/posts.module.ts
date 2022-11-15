import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { PostComponent } from "./posts.component";
import { PostService } from "./posts.service";
import { reducer } from "../store/reducer";
import { PostsEffects } from "../store/effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    imports: [CommonModule, StoreModule.forFeature('posts', reducer), EffectsModule.forFeature([PostsEffects])],
    providers: [PostService],
    declarations: [PostComponent],
    exports: [PostComponent],
})
export class PostsModule{}