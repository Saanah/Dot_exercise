import React, { useState } from 'react';

function App() {

  //State hooks for the current dots and undoed dots
  const[dots, setDots] = useState([])
  const[undoedDots, setUndoedDots] = useState([])


  //Saves the clicked dot coordinates
  const saveDots = (e) => {
  const {screenX, screenY} = e
  setDots([...dots, {
    y: screenY,
    x: screenX,
  }])

}

//Undo dots
//Pops the most recently added dot from the dots array and then updates the state of dots and undoedDots
const undoDots = () => {
const updatedDots = [...dots]
if(updatedDots.length == 0) return
const poppedDots = updatedDots.pop()
setDots(updatedDots)
setUndoedDots([...undoedDots, poppedDots])
}

//Redo dots
//Pops the most recently added dot from the undoedDots array and updates the state of dots and undoedDots
const redoDots = () => {
  const updatedDots = [...undoedDots]
  if(updatedDots.length == 0) return
  const poppedDots = updatedDots.pop()
  setDots([...dots, poppedDots])
  setUndoedDots(updatedDots) 
}
  
  return (
    <div>
    <button onClick={undoDots} disabled={dots.length == 0}>Undo</button>
    <button onClick={redoDots} disabled={undoedDots.length == 0}>Redo</button>
    <div className = {'container'} onClick={saveDots}>
      {dots.map((dot, index) => (
        <div key={index} className = {'dot'} style = {{left: dot.x - 7 + 'px', top: dot.y - 75 + 'px'}}>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
