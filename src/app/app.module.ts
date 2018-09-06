import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ProductComponent } from './product/product.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowPostComponent } from './show-post/show-post.component';

const routes: Routes = [
   {path: "", component: UsersComponent },
   {path: "posts", component: PostsComponent },
   {path: "posts/:id", component: ShowPostComponent },
   {path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavbarComponent,
    SidebarComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    ProductComponent,
    PostsComponent,
    UsersComponent,
    PageNotFoundComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
