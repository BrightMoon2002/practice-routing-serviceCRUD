import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = []
  // bookList: Book[] = [
  //   {
  //     id: 1,
  //     name: "The Old man and the Sea",
  //     author: "Ernest Hemingway",
  //     category: "novel",
  //     price: 10000
  //   },
  //   {
  //     id: 2,
  //     name: "Conan",
  //     author: "Yui Hatano",
  //     category: "comic",
  //     price: 5000
  //   },
  //   {
  //     id: 3,
  //     name: "How the Steel Was Tempered",
  //     author: "Nikolai Alekseyevich Ostrovsky",
  //     category: "novel",
  //     price: 10000
  //   }
  // ];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  getAllBook(): Book[] {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books;
    })
    return this.books;
  }

}
