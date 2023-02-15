import './App.css';
import TodoForm from './components/todo_form/TodoForm'
import TodoList from './components/todo_list/TodoList'
import TodoFooter from './components/todo_footer/TodoFooter'
import { useReducer } from 'react';


function reducer(state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
    ]
  } else if (action.type === 'delete') {
      return state.filter(item => item.id !== action.payload.id)
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);



  return (
    <div className="App">
      <header>
        <h1 className="todoAppTitle">todos</h1>
      </header>
      <TodoForm addTask={(text) => {
        if (text) {
          dispatch({
            type: 'add',
            payload: {
              text: text
            }
          })
        }

      }} />
      <TodoList data={todos} deleteItem={
        (id) => dispatch({
         type: 'delete',
          payload: {
            id: id
          }
        })
      } />
      <TodoFooter />
    </div>
  );
}

export default App;
