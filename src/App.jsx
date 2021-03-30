// NPM Package
import {useState} from "react";

export default function App() {
  console.log("App.jsx created");

   //STATE
    const [myState, setMyState] = useState(0);
  
  function increase(){ 
    setMyState(myState + 1);

  }  
  function decrease(){
    setMyState(myState - 1);
  }

  return (
    <div className="App">
      <h1>React state Exercise</h1>
      <p>state: {myState}</p>
      <button onClick={increase}>Increase counter</button>
      <button onClick={decrease}>Decrease counter</button>
    </div>
  );
}