import React from 'react';
import Shelf from './Shelf';


const BookShelves = ({ books, onUpdateBook }) => {
  const booksCurrentlyReading = books.filter(b => b.shelf === "currentlyReading")
  const booksWantToRead = books.filter(b => b.shelf === "wantToRead")
  const booksRead = books.filter(b => b.shelf === "read")

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            books={booksCurrentlyReading}
            shelfTitle={"Currently Reading"}
            currentShelf={"currentlyReading"}
            onUpdateBook={onUpdateBook}
          />
          <Shelf
            books={booksWantToRead}
            shelfTitle={"Want to Read"}
            currentShelf={"wantToRead"}
            onUpdateBook={onUpdateBook}
          />
          <Shelf
            books={booksRead}
            shelfTitle={"Read"}
            currentShelf={"read"}
            onUpdateBook={onUpdateBook}
          />
        </div>
      </div>
    </div>
  );
}

export default BookShelves;
