import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    return (                    
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={() => {
                    setTodos([...todos, input]);
                    setInput("");
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>        
    );
};  
export default Todo 
    