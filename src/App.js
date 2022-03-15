import logo from './logo.svg';
import './App.css';
import { isUniqueV1, flatten } from './solutions';

function App() {

  console.log(isUniqueV1('87sdyfg783459p8H*(7h345'), isUniqueV1('abc'), isUniqueV1('abcdefghijklmnop'));
  console.log(flatten(['12345', [54321, 123456], ['12345', [true, false, true, false], '012345'], 'saahir']));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
