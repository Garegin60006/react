import MainContainer from './container/MainContainer';
import './App.css';
import { useState } from 'react';

function App() {

  const [lists, setLists] = useState([
    { id: 1, text: "Learn js", isCompleted: false },
    { id: 2, text: "Learn Vue", isCompleted: false },
    { id: 3, text: "Learn Python", isCompleted: false }
  ]);

  return (
    <div className="App">
      <div>
      </div>
      <div class="background">
        <MainContainer add={(type) => {
          setLists([
            ...lists,
            {
              id: Math.random(),
              text: type,
              isCompleted: false
            }
          ]);
        }} data={lists}></MainContainer>
      </div>
    </div>
  );
}

export default App;