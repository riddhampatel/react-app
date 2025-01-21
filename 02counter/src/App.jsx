import { useState } from 'react'
import './App.css'

function App() {

  
 let [counter, rCounter] = useState(15)
  
 // let counter = 15;

  const addValue = () => {
    
   counter = counter + 1;
   rCounter(counter )
   console.log("clicked", counter);
  }

  // const removeValue = () => {
  //   rCounter(counter - 1)
  // }
  const removeValue = () => {
    if (counter > 0) {
      rCounter(counter - 1);
    }
  };
  return (
    <>
     <h1>Hii react</h1>
     <h2>Counter value : {counter}</h2>
     <button
     onClick={addValue}>Add Value</button><br></br>
     <button
     onClick={removeValue}>remove Value</button>
    </>
  )
}


export default App
