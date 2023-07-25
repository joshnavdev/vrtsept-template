import { useState } from 'react';
import './App.css';

console.log('joshua');

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
