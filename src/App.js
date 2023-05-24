import './App.css';
import Dictionary from "./Dictionary"; 
import React from "react";
import tardis from "./book-background.jpg";  

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
            <img src={tardis} className="tardis" alt="tardis" />
            <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Doctor" />
        </main>
          <footer className="app-footer">
            <a
              href="https://github.com/toshtech401"
              id="open-source-link"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Open source code</strong>{" "}
            </a>
            by Mustapha <br/> 👩🏻‍💻 <br/>  Currently located in Ilorin, Kwara State.
          </footer>
      </div>
    </div>
  );
}

export default App;
