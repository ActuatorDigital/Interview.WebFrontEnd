import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState();
  // Axios docs if needed: https://axios-http.com/docs/api_intro
  useEffect(
    () =>
      axios.get('https://randomuser.me/api').then(async (res) => {
        const data = await res.data.results[0];

        setResults(JSON.stringify(data));
      }),
    []
  );

  return (
    <div className='instruction-frame'>
      <h2 id='2-react-web-api-interactions'>2 - React web API interactions</h2>
      <pre>
        <code className='lang-bash'>
          git checkout <span className='hljs-keyword'>task</span>/react-api
        </code>
      </pre>
      <p>
        The project is pre-loaded with a new CreateReactApp project, and has the
        axios npm package installed. Use it to load data from the api provided.
      </p>
      <h3 id='todo'>TODO</h3>
      <ul>
        <li>Explore the api (see thunder client extension for examples).</li>
        <li>
          Use axios to load json from{' '}
          <a href='https://randomuser.me/api'>https://randomuser.me/api</a>.
        </li>
        <li>Print json from the api to console.</li>
        <li>Display json from as string on the webpage.</li>
      </ul>
      <p>{results}</p>
    </div>
  );
}

export default App;
