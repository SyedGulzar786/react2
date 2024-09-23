import logo from './logo.svg';
import './App.css';
import {Card, Input} from "./components"
function App() {
  const getData = (a) => {
    console.log(a)
  }
  const arr = ["one","two","three"]
  return (
    <div className="App">
<Input onChange={(e) => console.log(e.target.value)} />
{arr.map((v,i) => <Card v={v} getData={getData} />)}
    </div>
  );
}

export default App;
