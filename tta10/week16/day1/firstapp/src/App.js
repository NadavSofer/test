import logo from './logo.svg';
import './App.css';
import Text from './Components/Text';

function App() {
  const myName = 'nadav'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text name={myName}></Text>
      </header>
    </div>
  );
}

export default App;
