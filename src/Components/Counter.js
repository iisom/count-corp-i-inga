import React, {useState} from 'react';



function Counter({count, counterIndex, onIncrease, onDecrease}) {
  return (
    <div className="Counter">
      <h3 className="Counter-header">Counter</h3>
      <p>{count}</p>
      <button className="buttons" onClick={() => onIncrease(counterIndex)}>+</button>
      <button className="buttons" onClick={() => onDecrease(counterIndex)}>-</button>
    </div>
  )
}

export default Counter


