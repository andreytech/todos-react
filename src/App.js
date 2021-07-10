import React, {useState, useEffect} from 'react';
import './App.css';
import AddTodoForm from "./components/AddTodoForm";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8000/api/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        }

        fetchData();
    }, []);

    const addTodo = async text => {
        const response = await fetch('http://localhost:8000/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: text})
        });
        const jsonData = await response.json();
        if(!jsonData.id) {
            alert('Error');
        }

        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <div className="todo-list">
                {todos.map(
                    (todo, index) => (
                        <div className="todo" key={index}>
                            {index} - {todo.text}
                        </div>
                    )
                )}
            </div>
            <AddTodoForm addTodo={addTodo}/>
        </div>
    );
}

export default App;
