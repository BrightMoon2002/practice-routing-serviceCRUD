import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1000)]]
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
