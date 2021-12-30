import {Injectable} from '@angular/core';
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: "The Old man and the Sea",
      author: "Ernest Hemingway",
      category: "novel",
      price: 10000
    },
    {
      id: 2,
      name: "Conan",
      author: "Yui Hatano",
      category: "comic",
      price: 5000
    },
    {
      id: 3,
      name: "How the Steel Was Tempered",
      author: "Nikolai Alekseyevich Ostrovsky",
      category: "novel",
      price: 10000
    }
  ];
constructor() {
}
  getAllBook(): Book[] {
  return this.books;
  }

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
