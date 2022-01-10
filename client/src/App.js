import logo from "./logo.svg";
import "./App.css";
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>potato turtle soup</p>
        <Button variant="contained">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Button>
      </header>
    </div>
  );
}

export default App;
