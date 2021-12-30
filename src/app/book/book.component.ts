import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book | null = {
    id: 0,
    name: '',
    author: '',
    category: '',
    price: 0,
  };
  id: number = 0;
  sub: Subscription;
  constructor(private bookService: BookService,
              private activeRouter: ActivatedRoute) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.book = this.getBookById(this.id);
      }
    )
  }

  ngOnInit(): void {
  }
  getBookById(id: number) {
    return this.bookService.getBookById(id);
  }

}
