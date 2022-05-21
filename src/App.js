import React, { useState } from 'react'
import './App.css';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
 
  const _normalEvent = () => {
    setCount1((count) => count + 1);
    setCount2((count) => count + 1);
    setCount3((count) => count + 1);
    setCount4((count) => count + 1);
    setCount5((count) => count + 1);
  };
  const _asyncEvent = () => {
    setTimeout(() => {
      setCount1((count) => count + 1);
      setCount2((count) => count + 1);
      setCount3((count) => count + 1);
      setCount4((count) => count + 1);
      setCount5((count) => count + 1);
    }, 500);
  };
 
  console.log("レンダリング", count1);

  return (
    <div className="App">
      <h1>Automatic batching test React 18</h1>
      count1: {count1}
      <br />
      count2: {count2}
      <br />
      count3: {count3}
      <br />
      count4: {count4}
      <br />
      count5: {count5}
      <br />
      <button onClick={_normalEvent}>通常処理</button>
      <button onClick={_asyncEvent}>非同期処理</button>
    </div>
  );
}

export default App;
