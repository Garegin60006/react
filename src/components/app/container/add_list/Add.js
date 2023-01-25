import './add.css';
import { useState } from 'react';

function Add ({add}) {
    const [type, setType] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            add(type);
            setType("");

        }
            } className="form-controll add_container">
            <input value={type} onChange={(e) => {
                setType(e.target.value)
            }} type="text" style={{width: '87%'}} />
            <button type="button">Add</button>
        </form>
    );
}


export default Add;