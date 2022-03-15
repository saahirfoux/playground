import logo from './logo.svg';
import './App.css';
import { isUniqueV1, flatten, noDuplicates, hiFrequency } from './solutions';

function App() {

  console.log(isUniqueV1('87sdyfg783459p8H*(7h345'), isUniqueV1('abc'), isUniqueV1('abcdefghijklmnop'));
  console.log(flatten(['12345', [54321, 123456], ['12345', [true, false, true, false], '012345'], 'saahir']));
  console.log(noDuplicates(['aabbccdd', 'abbccd','abcd','aaabcd','aabdccsse', 'abababcdcdcdcd', 'abcd', 'abcd']));
  console.log(noDuplicates('abababcdcdcdcdefg122222312'));
  console.log(hiFrequency(['1', '2', '3', '2', '2', '4', '5','3', '4','4','4','4', '5','5','5','5']));
  console.log(hiFrequency(['abc','abc','def','def','def','ghi','ghi','ghi','ghi']));

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
