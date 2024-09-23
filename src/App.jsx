import logo from './logo.svg';
import './App.css';
import {Card, Input, Header, Footer} from "./components/index.js"
import Button from 'react-bootstrap/Button';
function App() {
  const getData = (a) => {
    console.log(a)
  }
  const arr = ["one","two","three"]
  return (
<div className="App">
<Header />
<Button variant="dark">Dark</Button>
<Input onChange={(e) => console.log(e.target.value)} />
{arr.map((v,i) => <Card key={i} v={v} getData={getData} />)}
<Footer />
</div>
  );
}

export default App;
