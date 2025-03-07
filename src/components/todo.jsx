import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    return (                    
        <div>
            <h1>Todo</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => { setTodos([...todos, {input, disabled:true}]) ; setInput("") }} > Add </button>
            <button onClick={() => setTodos([])}>Clear</button>
<br/>
<ul>{todos.map((todo, i) => (<li key={i}>
<input defaultValue={todo.input} onChange={(e) => {todo.input = e.target.value}} disabled={todo.disabled} type="text" /> 
<button onClick={()=>{const oldTodos = [...todos]; oldTodos.splice(i, 1); setTodos(oldTodos)} }>Delete</button>
{ todo.disabled ?
    <button onClick={() => {todos.splice(i,1,{...todo, disabled:false}); setTodos([...todos]) ;console.log(todos,todo,todo.input);}}>Edit</button> 
    :
    <button onClick={() => {todo.disabled = true; setTodos([...todos])}}>Update</button>            
}

</li>))}</ul>
        </div>        
    );
};  
export default Todo 
