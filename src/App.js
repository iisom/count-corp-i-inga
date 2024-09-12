import React, { useState, useEffect } from 'react';
import './App.css';
import './Components/Counter.css';
import Counter from './Components/Counter';
import SuperCounter from './Components/SuperCounter';
import SuperDuperCounter from './Components/SuperDuperCounter';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  const [counters, setCounters] = useState([]);
  const [superCounters, setSuperCounters] = useState([]);
  const [superDuperCounters, setSuperDuperCounters] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from local storage or default to false
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    // Apply dark mode class to html or body
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (counters.length >= 3) {
      const sum = counters.reduce((cur, acc) => cur + acc, 0);
      setSuperCounters([...superCounters, sum]);
      setCounters([]);
    }
  }, [counters]);

  useEffect(() => {
    if (superCounters.length >= 3) {
      const sum = superCounters.reduce((cur, acc) => cur + acc, 0);
      setSuperDuperCounters([...superDuperCounters, sum]);
      setSuperCounters([]);
    }
  }, [superCounters]);

  function createCounter() {
    setCounters([...counters, 0]);
  }

  function incrementCounter(idx) {
    const count = counters[idx] + 1;
    const newCounters = [...counters];
    newCounters[idx] = count;
    setCounters(newCounters);
  }

  function decrementCounter(idx) {
    const count = counters[idx] - 1;
    const newCounters = [...counters];
    newCounters[idx] = count;
    setCounters(newCounters);
  }

  function incrementSuperCounter(idx) {
    const count = superCounters[idx] + 3;
    const newCounters = [...superCounters];
    newCounters[idx] = count;
    setSuperCounters(newCounters);
  }

  function decrementSuperCounter(idx) {
    const count = superCounters[idx] - 3;
    const newCounters = [...superCounters];
    newCounters[idx] = count;
    setSuperCounters(newCounters);
  }

  function startSuperDuperCounter(idx) {}

  return (
    <div className="App">
      <header className="App-header">
        <h1>CountCorp</h1>
        <h4>You can count on us!</h4>
        <button onClick={() => setDarkMode(prevMode => !prevMode)}>
          Toggle Dark Mode
        </button>
      </header>
      <section>
        <button onClick={createCounter}>Create counter</button>
      </section>
      <section>
        {counters.map((ct1, idx) => (
          <Counter 
            key={'' + ct1 + ':' + idx} 
            counterIndex={idx} 
            count={ct1}
            onIncrease={(ctrIndex) => incrementCounter(ctrIndex)}
            onDecrease={(ctrIndex) => decrementCounter(ctrIndex)}
          />
        ))}
        {superCounters.map((ct2, idx) => (
          <SuperCounter
            key={'' + ct2 + ':' + idx}
            superCounterIndex={idx}
            count={ct2}
            onIncrease={(ctrIndex) => incrementSuperCounter(ctrIndex)}
            onDecrease={(ctrIndex) => decrementSuperCounter(ctrIndex)}
          />
        ))}
        {superDuperCounters.map((ct3, idx) => (
          <SuperDuperCounter
            key={'' + ct3 + ':' + idx}
            count={ct3}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
