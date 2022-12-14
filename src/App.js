import { useState } from 'react';

import Bye from './Bye';

// const zn = useState("");
// const value = zn[0];
// const setValue = zn[1];



function App() {
  const [val, setVal] = useState(null);
  return (
    <div className='App'>
      <h1>{val}</h1>
      <input type="text" value={val} onChange={(e) => {
        setVal(e.target.value);
      }} />
    </div>
  );
}

export default App;
