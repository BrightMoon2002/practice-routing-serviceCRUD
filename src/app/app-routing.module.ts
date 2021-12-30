import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {BookComponent} from "./book/book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {ShowEditBookComponent} from "./show-edit-book/show-edit-book.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'list',
    component: BookListComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  },
  {
    path: 'detail/:id',
    component: BookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'showEdit/:id',
    component: ShowEditBookComponent
  },
  {
    path: '',
    redirectTo:  'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
