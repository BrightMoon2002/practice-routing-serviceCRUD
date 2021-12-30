import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";
import {FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-show-edit-book',
  templateUrl: './show-edit-book.component.html',
  styleUrls: ['./show-edit-book.component.scss']
})
export class ShowEditBookComponent implements OnInit {
  book: any;
  bookMain: Book | null = {
    id: 0,
    name: '',
    author: '',
    category: '',
    price: 0
  }
  id: number = 0;
  sub: Subscription;
  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private activeRouter: ActivatedRoute
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.bookMain = this.getBookById(this.id);
      }
    )
  }

  ngOnInit(): void {
    this.book = this.fb.group({
      id: '',
      name: '',
      author: '',
      category: '',
      price: ''
    });
  }
  editBook() {
    this.book = this.bookMain;
    this.bookService.editBook(this.book);
  }
  getBookById(id: number) {
    return this.bookService.getBookById(id);
  }

}
