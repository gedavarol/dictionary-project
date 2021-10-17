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
          Coded by{" "}
          <a
            href="https://portfolio-gizem-eda-varol.netlify.app/about.html"
            target="_blank"
          >
            Gizem Eda Varol
          </a>
        </small>
      </footer>
    </div>
  );
}
