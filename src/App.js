import React, { useState } from "react";
import "./styles.css";

const bookshelf = {
  Fantasy: [
    {
      name: "A song of Ice and Fire",
      rating: "4.5/5",
      author: "George R.R Martin",
      description:
        "A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began the first volume of the series, A Game of Thrones, in 1991, and it was published in 1996"
    },
    {
      name: "Harry Potter and the Philosophers Stone",
      rating: "5/5",
      author: "J.K. Rowling",
      description:
        "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. "
    }
  ],
  Biographies: [
    {
      name: "Wings of fire",
      rating: "4.6/5",
      author: "Dr. A.P.J. Abdul Kalam and Arun Tiwari",
      description:
        "Dr. Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs. "
    },
    {
      name: "Long walk to Freedom",
      rating: "4.3/5",
      author: "Nelson Mandela",
      description:
        "Long Walk to Freedom is an autobiography written by South African President Nelson Mandela, and first published in 1994 by Little Brown & Co. The book profiles his early life, coming of age, education and 27 years in prison"
    }
  ],
  Productivity: [
    {
      name: "Atomic Habits",
      rating: "4.6/5",
      author: "James Clear",
      description:
        "An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.Changes that seem small and unimportant at first will compound into remarkable results if you’re willing to stick with them for years."
    },
    {
      name: "Deep Work",
      rating: "4.5/5",
      author: "Cal Newport",
      description:
        "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time."
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

      <div>
        <ul className="book-list">
          {bookshelf[genre].map((book) => (
            <li key={book.name}>
              <div className="book-description">
                <h3>{book.name}</h3>
                <small>{book.author}</small>
                <h4>{book.rating}</h4>
                <p>{book.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
