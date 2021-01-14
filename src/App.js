import React from "react";
import "./styles.css";

const bookshrlf = {};

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
