// src/App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';

interface User {
  id: number;
  name: string;
  gender: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{`${user.name} (${user.gender})`}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
