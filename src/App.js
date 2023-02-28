import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

    const name = useSelector(function(state){
      return state.currentUser.name;
    });

    const cars = useSelector(function(state) {
      return state.cars;
    })

  const dispatch = useDispatch();


  return (
    <div className="App">
        <h1>{name}</h1>

        <input type="text"  value={name} 
          onChange={(e) => {
            dispatch({
              type: "edit-current-user-name",
              payload: {
                name: e.target.value
              }
            })
          }}
        />

        <br />
        <br />
        <br />

          {
            cars.map((car) => (
              <div>
              <h1>{car.model}</h1>
              <button onClick={(e) => {
                 dispatch({
                  type: "delete-item",
                  payload: {
                    id: car.id
                  }
                 })
              }}>Delete Item</button>
              </div>
            ))
          }
      
    </div>
  );
}

export default App;
