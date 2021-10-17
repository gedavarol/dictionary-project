import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">Dictionary App</div>
      <main>
        <Dictionary defaultKeyword="parrot" />
      </main>
      <footer>
        <small>
          This project was coded by{" "}
          <a
            href="https://portfolio-gizem-eda-varol.netlify.app/about.html"
            target="_blank"
            rel="noreferrer"
          >
            Gizem Eda Varol
          </a>
          and is{" "}
          <a
            href="https://github.com/gedavarol/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and{" "}
          <a
            href="https://dictionary-app-gizem.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify{" "}
          </a>
        </small>
      </footer>
    </div>
  );
}
