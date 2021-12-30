import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Book} from "../book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  book: any;
  bookMain: Book = {
    id: 0,
    name: '',
    author: '',
    category: '',
    price: 0
  }

  constructor(
    private bookService: BookService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.book = this.fb.group({
      id: '',
      name: '',
      author: '',
      category: '',
      price: ''
    });
  }
  onSubmit() {
    console.log(this.book)
  }

  createNewBook() {
    this.bookMain = this.book.value
    return this.bookService.createNewBook(this.bookMain)
  }

}
