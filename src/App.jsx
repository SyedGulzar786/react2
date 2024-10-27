import logo from './logo.svg';
import IMAGES from './assets/images/weather-removebg-preview.png'
import './App.css';
import {Card, Input, Header, Footer} from "./components/index.js"
import Button from 'react-bootstrap/Button';
import BasicCard from './components/mui_card.jsx';
import Layouti from './components/ant_layout.jsx';
import { Component, useState } from 'react';
import Todo from './components/todo.jsx';
import BasicForm from './components/forms.jsx';
import AppRouter from './router/index.js';
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "GULZAR",
    };
    console.log("constructor, first")
  }
  
  componentDidMount() {
    console.log("componentDidMount, third")
  }

  updateName() {
    console.log("selfmade function, unknown")
    console.log(this.state.name)
    this.setState({ name: "SALMAN" });

  }
    render(){

      console.log("render, second")
      return (
        <div>
          <h1>{this.state.name}</h1>
          <button onClick={this.updateName.bind(this)} >update the name</button>

          
        </div>
      )
    }

  
}


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
  const [value,setValue] = useState("")
  const[type,setType] = useState("login")
  return (
<div>
<AppRouter/>
  <div>
<Layouti>
<div className="container">
  <div className="row justify-content-center">

   {type === "login" 
    ?
    <div className="col-6 p-5">
    <h2>Login</h2>
    <BasicForm />
    <Button onClick={() => setType("register")} variant="link">register now</Button>
    </div> 
    :
    <div className="col-6 p-5">
    <h2>Register</h2>
    <BasicForm />
    <Button onClick={() => setType("login")} variant="link">login now</Button>
    </div> 
  }
  </div>
  </div>
  <div className='mario-cards'>
<div> 
   {arr.map((v,i) => <Card key={i} v={v} getData={getData} />)}
</div>
<div>
<div className="App">
<Header />
<Dashboard/>
<img src={IMAGES} alt="" />

<Button variant="dark">Dark</Button>
<Input onChange={(e) => console.log(e.target.value)} />

<BasicCard />
{/* one way data binding and two way data binding */}
<input type="text" value={value} onChange={(e) => {setValue(e.target.value)}} />
<h1>{value}</h1>
<button onClick={() => setValue("")}>reset the value</button>
<Footer />
<Todo />
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
