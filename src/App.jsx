import logo from './logo.svg';
import IMAGES from './assets/images/weather-removebg-preview.png'
import './App.css';
import {Card, Input, Header, Footer} from "./components/index.js"
import Button from 'react-bootstrap/Button';
import BasicCard from './components/mui_card.jsx';
import Layouti from './components/ant_layout.jsx';

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
<div>
  <div>
<Layouti>
  <div className='mario-cards'>
<div> 
   {arr.map((v,i) => <Card key={i} v={v} getData={getData} />)}
</div>
<div>
<div className="App">
<Header />

<img src={IMAGES} alt="" />

<Button variant="dark">Dark</Button>
<Input onChange={(e) => console.log(e.target.value)} />

<BasicCard />
<Footer />
</div>
</div>
  </div>
  <button onClick={() => foo("foo function")} >Click me</button>
<button onClick={doo} >Call me</button>
</Layouti>

</div>
  


</div>
  );
}

export default App;
