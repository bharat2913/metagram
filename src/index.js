import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FeildValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FeildValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
