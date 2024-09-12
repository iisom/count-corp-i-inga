import { useState } from "react";

function SuperDuperCounter({ count }) {

  const [displayCount, setDisplayCount] = useState(count);
  const [iid, setIid] = useState(null);


  function handleStart() {
    let extraCount = 0;
    const newIid = setInterval(() => {
      extraCount += 1;
      setDisplayCount(count + extraCount);
    }, 1000);
    setIid(newIid)
  }

  function handleStop() {
    clearInterval(iid)
  }

  return (
    <div className="Counter">
      <h3 className="Counter-header">SuperDuperCounter</h3>
      <p>{displayCount}</p>
      <button className="buttons" onClick={() => handleStart()}>Start</button>
      <button className="buttons"onClick={() => handleStop()}>STOP</button>
    </div>
  )
}

export default SuperDuperCounter
