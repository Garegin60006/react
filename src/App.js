import './App.css';
import React from 'react';


function App() {

  let friends = [
    { id: 1, firstName: "Joe", lastName: "Jameson", age: 44 },
    { id: 2, firstName: "Irina", lastName: "...", age: 22 },
    { id: 3, firstName: "Samo", lastName: "Musaelyan", age: 25 }
  ];

  const elements = friends.map((friend) => {
    return <div key={friend.title}>
      <h3>{friend.firstName} {friend.lastName}</h3>
      <p>Age: {friend.age}</p>
    </div>;
  })

  return (
    <div>
      {
        friends.map((friend) => {
          return <div>
            <h3>{friend.firstName} {friend.lastName}</h3>
            <p>Age: {friend.age}</p>
          </div>;
        })
      }
    </div>
  )

}

export default App;
