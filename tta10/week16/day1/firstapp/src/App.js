import logo from './logo.svg';
import './App.css';
import Text from './Components/Text';
import Button from './Components/Button';

function App() {


  const thing = () => {
    // const person = prompt('What is your name')
    const firstNum = Number(prompt('type a number'))
    const secondNum = Number(prompt('type a number'))
    
    if (isNaN(firstNum) || isNaN(secondNum)) {
      console.log('invalid numbers');
    } else {
      console.log(firstNum + secondNum);
    }
  }

  const myName = 'nadav'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text name={myName}></Text>
        
        <Button text='log here'action={()=>console.log('I am the first button')}></Button>
        <Button text='alert here' action={()=>alert('I am the second button')}></Button>

        <Button text='function here' action={()=>thing()}></Button>
      </header>
    </div>
  );
}

export default App;
