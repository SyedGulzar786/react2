import logo from './logo.svg';
import IMAGES from './assets/images/weather.jpeg'
import './App.css';
import {Card, Input, Header, Footer} from "./components/index.js"
import Button from 'react-bootstrap/Button';
function App() {
  const getData = (a) => {
    console.log(a)
  }
  const foo = (b) => {
    console.log(b)
  }
  const doo = () => {
    console.log("doo function")
  }
  const arr = ["one","two","three"]
  return (

<div className="App">
<Header />
<img src={IMAGES} alt="" />
<button onClick={() => foo("foo function")} >Click me</button>
<button onClick={doo} >Call me</button>
<Button variant="dark">Dark</Button>
<Input onChange={(e) => console.log(e.target.value)} />
{arr.map((v,i) => <Card key={i} v={v} getData={getData} />)}
<Footer />
</div>

  );
}

export default App;
