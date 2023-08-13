import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://portfolio-yy.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Yulia Yulina
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/FrauY/homework-search-engine"
          target="_ blank"
          rel="noreferrer"
        >
          open-soursed on GitHub
        </a>
      </footer>
    </div>
  );
}
