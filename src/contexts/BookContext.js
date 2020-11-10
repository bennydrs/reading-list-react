import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'In Search of Lost Time', author: 'Marcel Proust', id: 1},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', id: 2}
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuidv4()}])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
