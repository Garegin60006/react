import './TodoForm.css';
import { useState } from 'react';

function TodoForm({addTask}) {
    const [text, sendText] = useState("");
    return (
    <form className='todoAppForm' onSubmit={(e) =>  {
        e.preventDefault();
        addTask(text);
        sendText("");
     }}>
        
        <input onChange={(e) => sendText(e.target.value)} value={text} className='todoInput' type="text" />
        <button className='todoAppAddButton'>Send</button>
    </form>
    )
}

export default TodoForm;