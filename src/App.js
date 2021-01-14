import React from "react";
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
    </div>
  );
}
