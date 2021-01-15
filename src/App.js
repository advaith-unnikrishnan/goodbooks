import React, { useState } from "react";
import "./styles.css";

const bookshelf = {
  Fantasy: [
    {
      name: "A song of Ice and Fire",
      rating: "4.5/5",
      author: "George R.R Martin"
    },
    {
      name: "Harry Potter and the Philosophers Stone",
      rating: "5/5",
      author: "J.K. Rowling"
    }
  ],
  Biographies: [
    {
      name: "Wings of fire",
      rating: "4.6/5",
      author: "Dr. A.P.J. Abdul Kalam and Arun Tiwari"
    },
    {
      name: "A promised land",
      rating: "4.4/5",
      author: "Barack Obama"
    }
  ],
  Productivity: [
    {
      name: "Atomic Habits",
      rating: "4.6/5",
      author: "James Clear"
    },
    {
      name: "Deep Work",
      rating: "4.5/5",
      author: "Cal Newport"
    }
  ]
};
export default function App() {
  var genres = Object.keys(bookshelf);
  const [genre, setGenre] = useState("Fantasy");

  function genreClickHandler(item) {
    setGenre(item);
  }

  return (
    <div className="App">
      <header>
        <img
          src="/images/library.jpg"
          alt="bookshelf"
          className="hero-img"
        ></img>
        <h1>Goodbooks</h1>
        <p>
          Do you love books? Want to get new recommendations from different
          genres? Then try it out
        </p>
      </header>

      <ul className="genre-list">
        {genres.map((item) => {
          return (
            <li
              className="genre-name"
              key={item}
              onClick={() => genreClickHandler(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>

      {/* <ul style={{ paddingInlineStart: "0" }}>
          {bookshelf[genre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul> */}

      <div className="book-list">
        <ul>
          {bookshelf[genre].map((book) => (
            <li key={book.name}>{book.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
