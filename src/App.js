import './App.css';
import axios from 'axios';

function App() {
  // Axios docs if needed: https://axios-http.com/docs/api_intro

  return (
    <div className="instruction-frame">
      <h2 id="2-react-web-api-interactions">2 - React web API interactions</h2>
      <pre><code class="lang-bash">git checkout <span class="hljs-keyword">task</span>/react-api
      </code></pre>
      <p>The project is pre-loaded with a new CreateReactApp project, and has the axios npm package installed. Use it to load data from the api provided.</p>
      <h3 id="todo">TODO</h3>
      <ul>
        <li>Explore the api (see thunder client extension for examples).</li>
        <li>Use axios to load json from <a href="https://randomuser.me/api">https://randomuser.me/api</a>.</li>
        <li>Print json from the api to console.</li>
        <li>Display json from as string on the webpage.</li>
      </ul>
    </div>
  );
}

export default App;
