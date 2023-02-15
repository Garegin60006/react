import './TodoList.css';
import TodoItem from './todo_item/TodoItem';


function TodoList ({data, deleteItem}) {
    return (
    <div>
        {
          data.map(date => <TodoItem  date={date} deleteItem={deleteItem} onchange={onchange} />)  
        }
    </div>
    );
}

export default TodoList;