// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

// function LoginPage() {
//   const [username, setUsername] = useState('');

//   return (
//     <div>
//       <h2>Login</h2>
//       <input 
//         type="text" 
//         placeholder="Enter username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)} 
//       />
//       <Link to={`/welcome/${username}`}>
//         <button>Login</button>
//       </Link>
//     </div>
//   );
// }

// function WelcomePage({ match }) {
//   return (
//     <div>
//       <h2>Welcome, {match.params.username}!</h2>
//       <p>This is the welcome page.</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={LoginPage} />
//         <Route path="/welcome/:username" component={WelcomePage} />
//         <Redirect to="/" />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
