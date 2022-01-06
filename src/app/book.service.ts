import {Injectable} from '@angular/core';
import {Book} from "./book";
import {environment} from "../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //API_LOCAL
  // private API_SHOWLIST = environment.API_LOCAL;
  //API_HEROKU
  private API_SHOWLIST = environment.API_LOCAL;
  books: Book[] = [];
  // books: Book[] = [
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
constructor(private http: HttpClient) {
}
  getAllBook(): Observable<Book[]> {
  return this.http.get<Book[]>(this.API_SHOWLIST);
  }
  // getAllBook(): Book[] {
  // return this.books
  // }

  createNewBook(book: Book) {
  this.books.push(book)
  }

  getBookById(id: number) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id == id) {
        return this.books[i];
      }
      }
    return null;
    }

    editBook(book: Book) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].id == book.id) {
          return this.books[i] = book;
        }
      }
      return null;
    }

  deleteBook(id: number) {
  const index = this.books.findIndex(book => book.id === id)
  this.books.splice(index, 1);
  }
}
