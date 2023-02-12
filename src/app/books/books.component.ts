import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [
    {
      name: 'clean code',
      author: 'robert c martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700,
    },
    {
      name: 'pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 800,
    },
    {
      name: 'art of computer programming',
      author: 'donald knuth',
      image: 'https://m.media-amazon.com/images/I/41YakMLJktL._SY429_BO1,204,203,200_.jpg',
      amount: 182.49,
    },
    {
      name: 'Introduction to Algorithms',
      author: 'thomas h. cormen',
      image: 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg',
      amount: 182.49,
    }
  ]
 
 isShowing: boolean= true;

  constructor() { }

  ngOnInit(): void {
  }



}
