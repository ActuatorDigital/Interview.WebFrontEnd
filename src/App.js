import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {

  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    async function getUser() {
      try {
        const getUsers = await axios.get('https://randomuser.me/api');
        setUsers(getUsers.data.results);
        console.log(getUsers.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, [setUsers])

  return (

    <div className="instruction-frame">

      {users && users.map(u => {
        return (<p key={u.id.value}>{u.email}</p>)
      })}

      <h2 id="3-react-styling-and-component-libraries">3 - React Styling and Component Libraries</h2>
      <pre><code className="lang-bash">git checkout <span className="hljs-keyword">task</span>/styled-components
      </code></pre>
      <p>
        Now that we&#39;re reading data from the provided API, it&#39;s time to build new react components,
        and to use them with the Material UI component library.
        The Material UI npm package has been added to the solution.
      </p>
      <h3 id="todo">TODO</h3>
      <ul>
        <li>Create a component to display a user.<ul>
          <li>Display Username.</li>
          <li>Display First and Last Name.</li>
          <li>Display Email.</li>
          <li>Render the users&#39;s profile picture.</li>
        </ul>
        </li>
        <li>Connect the loading of new users to a button press.</li>
        <li>Implement pagination, continuously loading and appending users.<ul>
          <li>eg: <a href="https://randomuser.me/api?page=1">https://randomuser.me/api?page=1</a></li>
        </ul>
        </li>
        <li>Render user components into a Material UI grid.</li>
      </ul>
    </div>
  );
}

export default App;
