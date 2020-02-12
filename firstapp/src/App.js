import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello there!'},
    {name: 'Ted', message: 'Oohaye...'},
    {name: 'Jack', message: 'Feck!!!'}
  ]);

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;