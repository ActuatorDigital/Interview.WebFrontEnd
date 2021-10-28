import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className='instruction-frame'>
      <div>
        <h2 id='1-react-basics'>1 - React Basics</h2>
        <pre>
          <code class='lang-bash'>git checkout task/react-counter</code>
        </pre>
        <p>
          For this first task, don&#39;t worry about styling. The uglier the
          better. All we want to see in this step is that you can introduce a
          button to a page, which when clicked increments a counter which is
          rendered in a page.
        </p>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
