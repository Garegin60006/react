import './TodoItem.css'

function TodoItem({ date, deleteItem }) {
    return (
        <div className="todoListItem">
            <label style={{ cursor: 'pointer' }}>
                <input type="checkbox" onChange={(e) => {
                        onchange({
                            ...date,
                            isCompleted: e.target.checked
                        })
                }} checked={date.isCompleted} />
                <span>{date.text}</span>
            </label>
            <button onClick={() => { deleteItem(date.id) }}>x</button>
        </div>
    )
}

export default TodoItem;