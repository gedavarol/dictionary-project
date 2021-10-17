import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">Dictionary App</div>
      <main>
        <Dictionary defaultKeyword="parrot" />
      </main>
      <footer className="text-center">
        <small>Coded by Gizem Eda Varol</small>
      </footer>
    </div>
  );
}
