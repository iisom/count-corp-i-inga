

function SuperCounter({ count, superCounterIndex, onIncrease, onDecrease }) {
    return (
      <div className="Counter">
        <h3 className="Counter-header">SuperCounter</h3>
        <p>{count}</p>
        <button className="buttons" onClick={() => onIncrease(superCounterIndex)}>+</button>
        <button className="buttons" onClick={() => onDecrease(superCounterIndex)}>-</button>
      </div>
    )
  }
  
  export default SuperCounter
  

    


   