import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ShowEditBookComponent } from './show-edit-book/show-edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    CreateBookComponent,
    DeleteBookComponent,
    HomeComponent,
    EditBookComponent,
    ShowEditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
