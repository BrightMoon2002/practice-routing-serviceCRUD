import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Book} from "../book";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  book: Book | null = {
    id: 0,
    name: '',
    author: '',
    category: '',
    price: 0,
  };
  id: number = 0;
  sub: Subscription;

  constructor(
    private bookService: BookService,
    private activeRouter: ActivatedRoute) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.book = this.getBookById(this.id);
        if (this.book != null) {
          this.deleteById(this.id);
        }
      }
    )
  }
  getBookById(id: number) {
    return this.bookService.getBookById(id);
  }

  deleteById(id: number) {
    this.bookService.deleteBook(id);
  }

  ngOnInit(): void {
  }

}
