import logo from './logo.svg';
import './App.css';
import Calculate from './Components/Calculate';

function App() {
  return (
    <div className="App">
        <div className="calculator-wrapper">
            <h1 className="title">Calculator 🧮</h1>
            <Calculate />
  </div>
    </div>
  );
}

export default App;
