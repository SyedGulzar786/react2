import logo from './logo.svg';
import './App.css';
import {Card, Input} from "./components"
import Button from 'react-bootstrap/Button';
function App() {
  const getData = (a) => {
    console.log(a)
  }
  const arr = ["one","two","three"]
  return (
<div className="App">
<Button variant="dark">Dark</Button>
<Input onChange={(e) => console.log(e.target.value)} />
{arr.map((v,i) => <Card v={v} getData={getData} />)}
</div>
  );
}

export default App;
