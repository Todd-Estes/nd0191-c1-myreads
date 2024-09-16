import React from 'react';
import Book from './Book';

const Shelf = (props) => {
  const {
    books,
    shelfTitle,
    onUpdateBook
  } = props;
  return (
    <div className="bookshelf">
      {shelfTitle && (
        <h2 className="bookshelf-title">{shelfTitle}</h2>
      )}
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b) => (
            <li key={b.id}>
              <Book
                book={b}
                onUpdateBook={onUpdateBook}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
