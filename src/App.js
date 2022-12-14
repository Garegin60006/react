

import Bye from './Bye';


function App() {
  return (
    <div>
      <div>App component</div>
      <Bye />
      <button onClick={(evt) => alert(123)}>Click Me</button>
    </div>
  );
}

export default App;
