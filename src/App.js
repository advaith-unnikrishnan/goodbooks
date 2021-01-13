import React from "react";
import "./styles.css";

var bookList = {
  Fiction: ["Harry Potter", "A song of Ice and Fire"],
  Productivity: ["Atomic Habits"]
};
export default function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span>📗</span> Goodbooks
        </h1>
        <p>
          Do you love books? Want to get new recommendations from different
          jonures? Then try it out
        </p>
      </header>
    </div>
  );
}
