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
  function modifyByValue(newValue){
    setMyState(myState + newValue);
  }

  return (
    <div className="App">
      <h1>React state Exercise</h1>
      <p>state: {myState}</p>
      <h2>Button without Argument</h2>
      <button onClick={increase}>Increase counter</button>
      <button onClick={decrease}>Decrease counter</button>
      <hr/>
      <h2>Button with Argument</h2>
      <button onClick={() => modifyByValue(2)}>Increase value</button>
      <button onClick={() => modifyByValue(-3)}>Decrease value</button>
    </div>
  );
}