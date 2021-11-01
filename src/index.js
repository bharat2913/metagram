/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue, analytics } from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue, analytics }}>
    <App />,
    analytics.logEvent('notification_received')
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
