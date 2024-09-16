import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import noImageIcon from "./icons/no-image.png";

const Book = (props) => {
  const { book, onUpdateBook } = props;
  const { title, authors, imageLinks } = book;
 
  const thumbnail = imageLinks ? imageLinks.thumbnail : noImageIcon;
  const joinedAuthors = authors ? authors.join(', ') : "Unknown Author";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <BookShelfChanger book={book} onUpdateBook={onUpdateBook} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{joinedAuthors}</div>
    </div>
  );
}

export default Book;