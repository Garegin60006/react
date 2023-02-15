import './TodoFooter.css'

function TodoFooter () {
    return (
        <div className="todoAppFooter">
            <span>1/4 Completed</span>
            <button 
                className="todoClearCompleted"
            >Clear Completed</button>
        </div>
    );
}

export default TodoFooter;