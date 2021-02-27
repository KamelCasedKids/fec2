import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';

require('./css/mystyles.scss');

// import style here or in the app.jsx? n

// const App = () => {
//   return (
//     <h1>This is our React App</h1>
//     )
// };

ReactDOM.render(<App />, document.getElementById('app'));
