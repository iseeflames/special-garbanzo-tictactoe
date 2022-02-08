import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <h1 className="game-title">Tic Tac Toe</h1>
      <Game />
      <p className="contributor">
        Built by <a href="https://github.com/iseeflames">Phomolo Phiri</a>{" "}
        &#169; 2022
      </p>
    </div>
  );
}

export default App;
