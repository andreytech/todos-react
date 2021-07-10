import React, {useState, useEffect} from 'react';

function AddTodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleAddTodo = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={handleAddTodo} >
                Add Todo
            </button>
        </>
    );
}

export default AddTodoForm;
